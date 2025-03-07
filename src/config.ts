// Базовые типы данных системы
type DataType = 'string' | 'number' | 'boolean' | 'object' | 'array' | 'bigint';
type PipelineMode = 'lastValue' | 'accumulator' | 'procedure';
type PipelineStatus = 'active' | 'inactive' | 'error';
type ExecutionStatus = 'pending' | 'running' | 'completed' | 'failed';

// Интерфейсы основных сущностей
interface Project {
  id: string;
  name: string;
  description?: string;
  created: Date;
  updated: Date;
  pipelines: Pipeline[];
  dashboards: Dashboard[];
  settings: {
    visibility: 'private' | 'team' | 'public';
    tags?: string[];
  };
}

interface Dashboard {
  id: string;
  projectId: string;
  name: string;
  description?: string;
  created: Date;
  updated: Date;
}

interface Pipeline {
  id: string;
  projectId: string;
  name: string;
  description?: string;
  templateId: string;
  mode: PipelineMode;
  status: PipelineStatus;
  created: Date;
  updated: Date;
  lastRun?: Date;
  settings: {
    timeout: number; // в секундах
    retryPolicy: {
      attempts: number;
      delay: number;
    };
  };
}

interface Template {
  id: string;
  name: string;
  description?: string;
  version: string;
  nodes: Node[];
  connections: Connection[];
  validation: {
    isValid: boolean;
    errors: string[];
  };
}

interface Node {
  id: string;
  type: NodeType;
  config: NodeConfig;
  position: {
    x: number;
    y: number;
  };
}

type NodeType = 'source' | 'entity' | 'field' | 'transform' | 'filter' | 'sort' | 'input' | 'return';

interface Connection {
  id: string;
  sourceNodeId: string;
  targetNodeId: string;
  sourcePort: string;
  targetPort: string;
}

// Конфигурации различных типов нод
interface NodeConfig {
  // Базовый интерфейс для конфигурации

  [key: string]: unknown,
}

interface SourceConfig extends NodeConfig {
  type: 'blockchain' | 'http' | 'database';
  blockchain?: {
    network: 'eth-mainnet' | 'eth-testnet';
    provider: 'quicknode';
  };
  http?: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    url: string;
    headers?: Record<string, string>;
  };
  database?: {
    type: 'postgres' | 'mysql' | 'mongodb';
    connection: {
      host: string;
      port: number;
      database: string;
    };
  };
}

interface EntityConfig extends NodeConfig {
  sourceId: string;
  method: string;
  arguments?: {
    name: string;
    type: DataType;
    value?: any;
  }[];
}

interface FieldConfig extends NodeConfig {
  sourceId: string;
  path: string;
  alias?: string;
}

interface TransformConfig extends NodeConfig {
  operation: 'math' | 'string' | 'array';
  method: string;
  params?: Record<string, any>;
}

// Конфигурация системы исполнения
const executionConfig = {
  pipeline: {
    maxExecutionTime: 60, // секунды
    maxRetries: 3,
    defaultTimeout: 60,
  },
  template: {
    maxNodes: 50,
    maxConnections: 100,
  },
  limits: {
    free: {
      pipelines: 5,
      executionsPerDay: 100,
      storage: 1024 * 1024 * 1024, // 1GB в байтах
    },
    pro: {
      pipelines: 50,
      executionsPerDay: 1000,
      storage: 10 * 1024 * 1024 * 1024, // 10GB
    },
    enterprise: {
      pipelines: Infinity,
      executionsPerDay: Infinity,
      storage: 100 * 1024 * 1024 * 1024, // 100GB
    },
  },
};

// Экспорт всех типов и конфигураций
export {
  DataType,
  PipelineMode,
  PipelineStatus,
  ExecutionStatus,
  Project,
  Pipeline,
  Template,
  Node,
  NodeType,
  Connection,
  NodeConfig,
  SourceConfig,
  EntityConfig,
  FieldConfig,
  TransformConfig,
  executionConfig,
  Dashboard,
};
