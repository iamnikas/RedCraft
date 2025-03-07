// src/components/nodes/InputHttp.tsx
import React, { useCallback, useState } from 'react';
import { Box, Text, Button, Input } from '@chakra-ui/react';
import { useStore } from '../../store';
import { withNode } from '../../hocs/withNode';

interface InputHttpProps {
  id: string;
  data: {
    url?: string;
    current?: any;
  };
}

const InputHttp: React.FC<InputHttpProps> = ({ id, data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const updateNodeData = useStore(state => state.updateNodeData);
  const addLogs = useStore(state => state.addLogs);

  // Обработчик изменения URL
  const handleUrlChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateNodeData({
      id,
      data: {
        ...data,
        url: e.target.value
      }
    });
  }, [id, data, updateNodeData]);

  // Обработчик загрузки данных
  const handleLoadData = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!data.url) {
      addLogs({
        method: 'error',
        data: ['URL is required']
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(data.url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Пытаемся получить JSON, если не получается - получаем текст
      let result;
      try {
        result = await response.json();
      } catch {
        result = await response.text();
      }

      updateNodeData({
        id,
        data: {
          ...data,
          current: result
        }
      });

      addLogs({
        method: 'info',
        data: [`Successfully loaded data from ${data.url}`]
      });

    } catch (error) {
      addLogs({
        method: 'error',
        data: [`Error loading data: ${error.message}`]
      });
      
      // Очищаем текущие данные в случае ошибки
      updateNodeData({
        id,
        data: {
          ...data,
          current: null
        }
      });
    } finally {
      setIsLoading(false);
    }
  }, [id, data, updateNodeData, addLogs]);

  return (
    <Box p={2}>
      <Text mb={1} color="silverDarken30">
        URL:
      </Text>
      
      <form onSubmit={handleLoadData}>
        <Input
          value={data.url || ''}
          onChange={handleUrlChange}
          placeholder="Enter URL..."
          className="nodrag" // Предотвращает перетаскивание узла при работе с инпутом
        />
        
        <Button
          type="submit"
          mt={2}
          isLoading={isLoading}
          width="100%"
        >
          {isLoading ? 'Loading...' : 'Load Data'}
        </Button>
      </form>

      {data.current && (
        <Text mt={2} fontSize="sm" color="gray.500">
          Data loaded successfully
        </Text>
      )}
    </Box>
  );
};

// Добавляем отображаемое имя компонента
InputHttp.displayName = 'InputHttp';

// Оборачиваем компонент в HOC withNode с отключенным targetHandle
export default withNode(InputHttp, { targetHandle: false });