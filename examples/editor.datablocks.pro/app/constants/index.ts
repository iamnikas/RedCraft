// src/constants/index.ts

// Типы узлов
export const NODE_TYPES = {
    INPUT_FILE: 'input-file',
    INPUT_PASTE: 'input-paste',
    INPUT_SHEETS: 'input-sheets',
    INPUT_HTTP: 'input-http',
    INPUT_EXAMPLE: 'input-example',
  } as const;
  
// Типы наборов данных
export const DATASET_TYPES = {
  ARRAY: 'array',
  OBJECT: 'object',
  TABLE: 'table',
  TREE: 'tree',
  GRAPH: 'graph',
  MATRIX: 'matrix',
  TIME_SERIES: 'timeSeries',
  GEOGRAPHIC: 'geographic'
} as const;

// Тип для TypeScript
export type DatasetType = typeof DATASET_TYPES[keyof typeof DATASET_TYPES];

// Описание форматов данных
export const DATASET_FORMATS = {
  [DATASET_TYPES.ARRAY]: {
    description: 'Одномерный массив данных',
    example: [1, 2, 3, 4, 5]
  },
  [DATASET_TYPES.OBJECT]: {
    description: 'Объект с вложенными данными',
    example: { key: 'value', nested: { data: true } }
  },
  [DATASET_TYPES.TABLE]: {
    description: 'Табличные данные',
    example: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
  },
  [DATASET_TYPES.TREE]: {
    description: 'Древовидная структура',
    example: { id: 'root', children: [{ id: 'child1' }, { id: 'child2' }] }
  },
  [DATASET_TYPES.GRAPH]: {
    description: 'Графовая структура',
    example: { nodes: [], edges: [] }
  },
  [DATASET_TYPES.MATRIX]: {
    description: 'Матричные данные',
    example: [[1, 2], [3, 4]]
  },
  [DATASET_TYPES.TIME_SERIES]: {
    description: 'Временные ряды',
    example: [{ timestamp: 1234567890, value: 42 }]
  },
  [DATASET_TYPES.GEOGRAPHIC]: {
    description: 'Географические данные',
    example: { type: 'Feature', geometry: { type: 'Point' } }
  }
} as const;

  // Типы данных
  export const DATA_TYPES = {
    JSON: 'json',
    CSV: 'csv',
    TEXT: 'text',
    GEOJSON: 'geojson',
    EXCEL: 'xlsx'
  } as const;
  
  // Поддерживаемые форматы файлов
  export const SUPPORTED_FILE_TYPES = {
    [DATA_TYPES.JSON]: '.json',
    [DATA_TYPES.CSV]: '.csv',
    [DATA_TYPES.GEOJSON]: '.geojson',
    [DATA_TYPES.EXCEL]: '.xlsx,.xls'
  } as const;
  
  // Примеры наборов данных
  export const EXAMPLE_DATASETS = {
    POPULATION: {
      id: 'population',
      name: 'Population Data',
      data: [
        { country: 'USA', population: 331002651 },
        { country: 'China', population: 1439323776 },
        { country: 'India', population: 1380004385 },
        { country: 'Indonesia', population: 273523615 },
        { country: 'Pakistan', population: 220892340 }
      ]
    },
    GDP: {
      id: 'gdp',
      name: 'GDP Data',
      data: [
        { country: 'USA', gdp: 21433225 },
        { country: 'China', gdp: 14342903 },
        { country: 'Japan', gdp: 5082465 },
        { country: 'Germany', gdp: 3846414 },
        { country: 'UK', gdp: 2827113 }
      ]
    },
    CITIES: {
      id: 'cities',
      name: 'Cities Data',
      data: [
        { city: 'Tokyo', lat: 35.6762, lon: 139.6503 },
        { city: 'Delhi', lat: 28.7041, lon: 77.1025 },
        { city: 'Shanghai', lat: 31.2304, lon: 121.4737 },
        { city: 'São Paulo', lat: -23.5505, lon: -46.6333 },
        { city: 'Mexico City', lat: 19.4326, lon: -99.1332 }
      ]
    }
  } as const;
  
  // Методы логирования
  export const LOG_METHODS = {
    INFO: 'info',
    ERROR: 'error',
    WARNING: 'warning'
  } as const;
  
  // Позиции хэндлов для ReactFlow
  export const HANDLE_POSITIONS = {
    LEFT: 'left',
    RIGHT: 'right',
    TOP: 'top',
    BOTTOM: 'bottom'
  } as const;
  
  // Размеры узлов
  export const NODE_DIMENSIONS = {
    DEFAULT_WIDTH: 250,
    DEFAULT_HEIGHT: 150,
    MIN_WIDTH: 200,
    MIN_HEIGHT: 100,
    PADDING: 10
  } as const;
  
  // Стили
  export const COLORS = {
    PRIMARY: '#2196f3',
    SECONDARY: '#1e88e5',
    SUCCESS: '#4caf50',
    ERROR: '#f44336',
    WARNING: '#ff9800',
    INFO: '#2196f3',
    BACKGROUND: '#ffffff',
    TEXT: '#000000',
    BORDER: '#dddddd',
    DISABLED: '#9e9e9e'
  } as const;
  
  // Задержки
  export const TIMEOUTS = {
    DEBOUNCE: 300,
    THROTTLE: 100,
    ANIMATION: 200
  } as const;
  
  // Ключи для локального хранилища
  export const STORAGE_KEYS = {
    FLOW_DATA: 'flowData',
    USER_SETTINGS: 'userSettings',
    THEME: 'theme'
  } as const;
  
  // HTTP статусы
  export const HTTP_STATUS = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
  } as const;
  
  // Типы для TypeScript
  export type NodeType = typeof NODE_TYPES[keyof typeof NODE_TYPES];
  export type DataType = typeof DATA_TYPES[keyof typeof DATA_TYPES];
  export type LogMethod = typeof LOG_METHODS[keyof typeof LOG_METHODS];
  export type HandlePosition = typeof HANDLE_POSITIONS[keyof typeof HANDLE_POSITIONS];
  
  // Конфигурация по умолчанию
  export const DEFAULT_CONFIG = {
    nodeType: NODE_TYPES.INPUT_PASTE,
    dataType: DATA_TYPES.JSON,
    handlePosition: HANDLE_POSITIONS.RIGHT,
    width: NODE_DIMENSIONS.DEFAULT_WIDTH,
    height: NODE_DIMENSIONS.DEFAULT_HEIGHT,
    debounceTime: TIMEOUTS.DEBOUNCE,
    theme: 'light'
  } as const;