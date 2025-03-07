import React, { useCallback, useState } from 'react';
import { Box, Text, Button, Select } from '@chakra-ui/react';
import { useStore } from '../../store';
import { withNode } from '../../hocs/withNode';

interface SheetsData {
  name: string;
  data: any[][];
}

interface InputSheetsProps {
  id: string;
  data: {
    selectedSheet?: string;
    sheets?: SheetsData[];
    current?: any;
  };
}

const InputSheets: React.FC<InputSheetsProps> = ({ id, data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const updateNodeData = useStore(state => state.updateNodeData);
  const addLogs = useStore(state => state.addLogs);

  // Обработчик выбора листа
  const handleSheetChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSheet = e.target.value;
    const sheetData = data.sheets?.find(sheet => sheet.name === selectedSheet)?.data;

    updateNodeData({
      id,
      data: {
        ...data,
        selectedSheet,
        current: sheetData
      }
    });
  }, [id, data, updateNodeData]);

  // Обработчик загрузки Excel файла
  const handleFileUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    try {
      // Здесь должна быть логика чтения Excel файла
      // Например, используя библиотеку xlsx или similar
      const workbook = await readExcelFile(file);
      const sheets: SheetsData[] = [];

      // Преобразование каждого листа в массив данных
      workbook.SheetNames.forEach(sheetName => {
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        sheets.push({
          name: sheetName,
          data
        });
      });

      // Обновляем данные узла
      updateNodeData({
        id,
        data: {
          ...data,
          sheets,
          selectedSheet: sheets[0]?.name,
          current: sheets[0]?.data
        }
      });

      addLogs({
        method: 'info',
        data: [`Successfully loaded file: ${file.name}`]
      });

    } catch (error) {
      addLogs({
        method: 'error',
        data: [`Error loading file: ${error.message}`]
      });
    } finally {
      setIsLoading(false);
    }
  }, [id, data, updateNodeData, addLogs]);

  return (
    <Box p={2}>
      <Text mb={1} color="silverDarken30">
        Excel File:
      </Text>

      <input
        type="file"
        id={`file-input-${id}`}
        onChange={handleFileUpload}
        accept=".xlsx,.xls"
        style={{ display: 'none' }}
      />
      
      <Button
        onClick={() => document.getElementById(`file-input-${id}`)?.click()}
        isLoading={isLoading}
        width="100%"
        mb={2}
      >
        {isLoading ? 'Loading...' : 'Upload Excel File'}
      </Button>

      {data.sheets && data.sheets.length > 0 && (
        <>
          <Text mb={1} color="silverDarken30">
            Select Sheet:
          </Text>
          
          <Select
            value={data.selectedSheet}
            onChange={handleSheetChange}
            className="nodrag"
          >
            {data.sheets.map(sheet => (
              <option key={sheet.name} value={sheet.name}>
                {sheet.name}
              </option>
            ))}
          </Select>
        </>
      )}

      {data.current && (
        <Text mt={2} fontSize="sm" color="gray.500">
          Loaded {data.current.length} rows
        </Text>
      )}
    </Box>
  );
};

// Вспомогательная функция для чтения Excel файла
const readExcelFile = (file: File): Promise<any> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        resolve(workbook);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => reject(new Error('Error reading file'));
    reader.readAsBinaryString(file);
  });
};

// Добавляем отображаемое имя компонента
InputSheets.displayName = 'InputSheets';

// Оборачиваем компонент в HOC withNode с отключенным targetHandle
export default withNode(InputSheets, { targetHandle: false });