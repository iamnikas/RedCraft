import React, { useCallback, useState } from 'react';
import { Box, Text, Select, Button } from '@chakra-ui/react';
import { useStore } from '../../store';
import { withNode } from '../../hocs/withNode';

const SUPPORTED_FILE_TYPES = ['json', 'csv', 'geojson'];

interface InputFileProps {
  id: string;
  data: {
    fileType?: string;
    content?: any;
  };
}

const InputFile: React.FC<InputFileProps> = ({ id, data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const updateNodeData = useStore(state => state.updateNodeData);
  const addLogs = useStore(state => state.addLogs);

  // Обработчик изменения типа файла
  const handleTypeChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    updateNodeData({
      id,
      data: {
        ...data,
        fileType: e.target.value
      }
    });
  }, [id, data, updateNodeData]);

  // Обработчик загрузки файла
  const handleFileUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    try {
      const content = await readFile(file, data.fileType);
      
      updateNodeData({
        id,
        data: {
          ...data,
          current: content
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

  // Функция чтения файла
  const readFile = (file: File, fileType: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = async (e) => {
        try {
          const content = e.target?.result;
          if (typeof content !== 'string') {
            throw new Error('Invalid file content');
          }

          switch (fileType) {
            case 'json':
            case 'geojson':
              resolve(JSON.parse(content));
              break;
            case 'csv':
              // Здесь может быть парсинг CSV
              resolve(content.split('\n').map(line => line.split(',')));
              break;
            default:
              resolve(content);
          }
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = () => reject(new Error('Error reading file'));

      if (fileType === 'json' || fileType === 'geojson' || fileType === 'csv') {
        reader.readAsText(file);
      } else {
        reject(new Error('Unsupported file type'));
      }
    });
  };

  return (
    <Box p={2}>
      <Text mb={1} color="silverDarken30">
        File type
      </Text>
      
      <Select 
        mb={2}
        value={data.fileType}
        onChange={handleTypeChange}
      >
        {SUPPORTED_FILE_TYPES.map(type => (
          <option key={type} value={type}>
            {type.toUpperCase()}
          </option>
        ))}
      </Select>

      <input
        type="file"
        id={`file-input-${id}`}
        onChange={handleFileUpload}
        accept={`.${data.fileType}`}
        style={{ display: 'none' }}
      />
      
      <Button
        onClick={() => document.getElementById(`file-input-${id}`)?.click()}
        isLoading={isLoading}
        width="100%"
      >
        {isLoading ? 'Loading...' : 'Upload File'}
      </Button>
    </Box>
  );
};

// Добавляем отображаемое имя компонента
InputFile.displayName = 'InputFile';

// Оборачиваем компонент в HOC withNode с отключенным targetHandle
export default withNode(InputFile, { targetHandle: false });