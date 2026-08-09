import React, { useMemo } from 'react';
import { useStore } from '../store';
import { Box } from '@chakra-ui/react';
import { DATASET_TYPES } from '../constants';

// Функция для проверки входных данных
const validateInput = (input, allowedTypes) => {
  console.log('[validateInput] input:', input, 'allowedTypes:', allowedTypes);
  if (!input){ 
    return { isValid: false, type: null };
  }
  
  const type = typeof input === 'string' ? 'string' : Array.isArray(input) ? 'array' : 'object';
  const isValid = Object.values(allowedTypes).includes(type);
  
  return { isValid, type };
};

/**
 * HOC для создания узлов графа
 * @param {React.Component} WrappedComponent - Компонент для обертывания
 * @param {Object} options - Опции конфигурации
 * @param {boolean} options.targetHandle - Флаг для отображения целевого хендлера
 */


// В контексте этого кода, "Интегрируется с системой соединений графа" относится к следующей части кода:
/**
  Рендерим хендлеры для соединений если они разрешены
  {options.targetHandle !== false && (
    <div className="target-handle" />
  )}
  <div className="source-handle" />

  Эти элементы target-handle и source-handle являются точками соединения в графе, где:
    source-handle - это точка выхода, откуда может начинаться соединение (стрелка)
    target-handle - это точка входа, куда может приходить соединение

  Это часть системы React Flow, где:
    Узлы (nodes) могут быть соединены между собой рёбрами (edges)
    source-handle всегда присутствует, позволяя создавать исходящие соединения
    target-handle может быть отключен через опцию targetHandle: false, запрещая входящие соединения

  Пример использования:
    // Узел, который может только отдавать данные
    const OutputOnlyNode = () => {...}
    export default withNode(OutputOnlyNode, { targetHandle: false })

    // Узел, который может и принимать и отдавать данные
    const ProcessingNode = () => {...}
    export default withNode(ProcessingNode, { targetHandle: true })


  В результате получается визуальный граф, где:
    Узлы могут быть соединены стрелками
    Данные могут передаваться по этим соединениям
    Некоторые узлы могут быть настроены только на выход данных
    Другие узлы могут как принимать, так и отдавать данные
    Это создает основу для визуального программирования или построения потоков данных через графический интерфейс.
 */


const withNode = (WrappedComponent, options = {}) => {
  const NodeWrapper = (props) => {
    const { id, data, type } = props;
    
    // Получаем функции из store
    const updateNodeData = useStore(state => state.updateNodeData);
    const addLogs = useStore(state => state.addLogs);

    // Проверяем входные данные
    const [inputData, inputType, isValid] = useMemo(() => {
      const input = data?.current;
      const { isValid, type } = validateInput(input, DATASET_TYPES);
      return [input, type, isValid];
    }, [data?.current]);

    // Обработка ошибок и логирование
    const handleError = (error) => {
      addLogs({
        method: 'error',
        data: [error.message]
      });
      return null;
    };

    // Обновление данных узла
    const handleDataUpdate = (newData) => {
      updateNodeData({
        id,
        data: {
          ...data,
          current: newData
        }
      });
    };

    return (
      <Box 
        className="node-wrapper"
        borderWidth="1px"
        borderRadius="md"
        bg="white"
      >
        <WrappedComponent
          {...props}
          inputData={inputData}
          inputType={inputType}
          isValid={isValid}
          onError={handleError}
          onDataUpdate={handleDataUpdate}
        />
        
        {/* Рендерим хендлеры для соединений если они разрешены */}
        {options.targetHandle !== false && (
          <div className="target-handle" />
        )}
        <div className="source-handle" />
      </Box>
    );
  };

  // Добавляем displayName для отладки
  NodeWrapper.displayName = `withNode(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return NodeWrapper;
};
export {
  withNode
};
export default withNode;