import React, { useCallback } from 'react';
import { Box } from '@chakra-ui/react'; 
import { Text } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';
import { useStore } from '../../store'; // Предположительно Zustand store
import { withNode } from '../../hocs/withNode';

const DATA_TYPES = ['json', 'csv', 'text']; // Поддерживаемые типы данных

const PasteInput = ({ id, data }) => {
  // Получаем функцию обновления данных узла из store
  const updateNodeData = useStore(state => state.updateNodeData);
  
  // Обработчик изменения типа данных
  const handleTypeChange = useCallback((e) => {
    const newType = e.target.value;
    updateNodeData({
      id,
      data: {
        dataType: newType
      }
    });
  }, [id, updateNodeData]);

  // Обработчик изменения текста
  const handleTextChange = useCallback((e) => {
    const text = e.target.value;
    updateNodeData({
      id,
      data: {
        text
      }
    });
  }, [id, updateNodeData]);

  // Обработчик вставки данных
  const handlePaste = useCallback(async () => {
    try {
      // Парсим данные в зависимости от выбранного типа
      let parsedData;
      switch(data.dataType) {
        case 'json':
          parsedData = JSON.parse(data.text);
          break;
        case 'csv':
          // Здесь должна быть логика парсинга CSV
          break;
        case 'text':
          parsedData = data.text;
          break;
        default:
          throw new Error('Unsupported data type');
      }

      // Обновляем данные узла
      updateNodeData({
        id,
        data: {
          current: parsedData
        }
      });

    } catch (error) {
      // Здесь должна быть обработка ошибок
      console.error(error);
    }
  }, [data.dataType, data.text, id, updateNodeData]);

  return (
    <Box p={2}>
      <Text mb={1} color="silverDarken30">
        Data type
      </Text>
      
      <Select 
        mb={2}
        value={data.dataType}
        onChange={handleTypeChange}
      >
        {DATA_TYPES.map(type => (
          <option key={type} value={type}>
            {type.toUpperCase()}
          </option>
        ))}
      </Select>

      <Textarea
        placeholder="Paste data here …"
        className="nodrag nowheel"
        value={data.text}
        onChange={handleTextChange}
        height={150}
        width={250}
      />
    </Box>
  );
};

// Добавляем отображаемое имя компонента
PasteInput.displayName = 'PasteInput';

// Оборачиваем компонент в HOC withNode с отключенным targetHandle
export default withNode(PasteInput, { targetHandle: false });