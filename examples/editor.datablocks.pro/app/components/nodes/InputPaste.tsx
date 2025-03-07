// src/components/nodes/InputPaste.tsx
import React, { useCallback, useState } from 'react';
import { Box, Text, Select, Textarea } from '@chakra-ui/react';
import { useStore } from '../../store';
import { withNode } from '../../hocs/withNode';

// Поддерживаемые типы данных
const DATA_TYPES = ['json', 'csv', 'text'] as const;
type DataType = typeof DATA_TYPES[number];

interface InputPasteProps {
  id: string;
  data: {
    dataType?: DataType;
    text?: string;
    current?: any;
  };
}

const InputPaste: React.FC<InputPasteProps> = ({ id, data }) => {
  const [error, setError] = useState<string | null>(null);
  const updateNodeData = useStore(state => state.updateNodeData);
  const addLogs = useStore(state => state.addLogs);

  // Обработчик изменения типа данных
  const handleTypeChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as DataType;
    setError(null);
    
    updateNodeData({
      id,
      data: {
        ...data,
        dataType: newType,
        // Пытаемся распарсить существующий текст с новым типом
        current: data.text ? parseData(data.text, newType) : null
      }
    });
  }, [id, data, updateNodeData]);

  // Парсинг данных в зависимости от выбранного типа
  const parseData = (text: string, type: DataType) => {
    try {
      switch (type) {
        case 'json':
          return JSON.parse(text);
        
        case 'csv':
          return text
            .split('\n')
            .map(line => line.split(','))
            .filter(row => row.some(cell => cell.trim()));
        
        case 'text':
        default:
          return text;
      }
    } catch (error) {
      setError(error.message);
      addLogs({
        method: 'error',
        data: [`Error parsing ${type}: ${error.message}`]
      });
      return null;
    }
  };

  // Обработчик изменения текста
  const handleTextChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setError(null);

    updateNodeData({
      id,
      data: {
        ...data,
        text,
        current: text ? parseData(text, data.dataType || 'text') : null
      }
    });
  }, [id, data, updateNodeData]);

  return (
    <Box p={2}>
      <Text mb={1} color="silverDarken30">
        Data type
      </Text>
      
      <Select 
        mb={2}
        value={data.dataType || 'text'}
        onChange={handleTypeChange}
        className="nodrag"
      >
        {DATA_TYPES.map(type => (
          <option key={type} value={type}>
            {type.toUpperCase()}
          </option>
        ))}
      </Select>

      <Textarea
        placeholder="Paste data here..."
        value={data.text || ''}
        onChange={handleTextChange}
        className="nodrag nowheel"
        height={150}
        width={250}
        resize="none"
        isInvalid={!!error}
      />

      {error && (
        <Text mt={2} color="red.500" fontSize="sm">
          {error}
        </Text>
      )}

      {data.current && !error && (
        <Text mt={2} color="green.500" fontSize="sm">
          Data parsed successfully
        </Text>
      )}
    </Box>
  );
};

// Добавляем отображаемое имя компонента
InputPaste.displayName = 'InputPaste';

// Оборачиваем компонент в HOC withNode с отключенным targetHandle
export default withNode(InputPaste, { targetHandle: false });