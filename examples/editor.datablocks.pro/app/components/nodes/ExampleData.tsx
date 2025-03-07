import React, { useCallback } from 'react';
import { Box, Text, Select, Button } from '@chakra-ui/react';
import { useStore } from '../../store';
import { withNode } from '../../hocs/withNode';

// Примеры данных для демонстрации
const EXAMPLE_DATASETS = {
  'population': {
    name: 'Population Data',
    data: [
      { country: 'USA', population: 331002651 },
      { country: 'China', population: 1439323776 },
      { country: 'India', population: 1380004385 },
      { country: 'Indonesia', population: 273523615 },
      { country: 'Pakistan', population: 220892340 }
    ]
  },
  'gdp': {
    name: 'GDP Data',
    data: [
      { country: 'USA', gdp: 21433225 },
      { country: 'China', gdp: 14342903 },
      { country: 'Japan', gdp: 5082465 },
      { country: 'Germany', gdp: 3846414 },
      { country: 'UK', gdp: 2827113 }
    ]
  },
  'cities': {
    name: 'Cities Data',
    data: [
      { city: 'Tokyo', lat: 35.6762, lon: 139.6503 },
      { city: 'Delhi', lat: 28.7041, lon: 77.1025 },
      { city: 'Shanghai', lat: 31.2304, lon: 121.4737 },
      { city: 'São Paulo', lat: -23.5505, lon: -46.6333 },
      { city: 'Mexico City', lat: 19.4326, lon: -99.1332 }
    ]
  }
};

interface ExampleDataProps {
  id: string;
  data: {
    selectedDataset?: string;
    current?: any;
  };
}

const ExampleData: React.FC<ExampleDataProps> = ({ id, data }) => {
  const updateNodeData = useStore(state => state.updateNodeData);
  const addLogs = useStore(state => state.addLogs);

  // Обработчик выбора набора данных
  const handleDatasetChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDataset = e.target.value;
    const datasetContent = EXAMPLE_DATASETS[selectedDataset]?.data;

    updateNodeData({
      id,
      data: {
        ...data,
        selectedDataset,
        current: datasetContent
      }
    });

    addLogs({
      method: 'info',
      data: [`Loaded example dataset: ${EXAMPLE_DATASETS[selectedDataset]?.name}`]
    });
  }, [id, data, updateNodeData, addLogs]);

  // Обработчик загрузки случайных данных
  const handleRandomData = useCallback(() => {
    const datasets = Object.keys(EXAMPLE_DATASETS);
    const randomDataset = datasets[Math.floor(Math.random() * datasets.length)];
    
    updateNodeData({
      id,
      data: {
        ...data,
        selectedDataset: randomDataset,
        current: EXAMPLE_DATASETS[randomDataset].data
      }
    });

    addLogs({
      method: 'info',
      data: [`Loaded random dataset: ${EXAMPLE_DATASETS[randomDataset].name}`]
    });
  }, [id, data, updateNodeData, addLogs]);

  return (
    <Box p={2}>
      <Text mb={1} color="silverDarken30">
        Example Dataset:
      </Text>
      
      <Select 
        mb={2}
        value={data.selectedDataset || ''}
        onChange={handleDatasetChange}
        className="nodrag"
      >
        <option value="">Select dataset...</option>
        {Object.entries(EXAMPLE_DATASETS).map(([key, dataset]) => (
          <option key={key} value={key}>
            {dataset.name}
          </option>
        ))}
      </Select>

      <Button
        onClick={handleRandomData}
        width="100%"
        size="sm"
        variant="outline"
      >
        Load Random Dataset
      </Button>

      {data.current && (
        <Text mt={2} fontSize="sm" color="gray.500">
          Loaded {Array.isArray(data.current) ? data.current.length : '1'} records
        </Text>
      )}
    </Box>
  );
};

// Добавляем отображаемое имя компонента
ExampleData.displayName = 'ExampleData';

// Оборачиваем компонент в HOC withNode с отключенным targetHandle
export default withNode(ExampleData, { targetHandle: false });