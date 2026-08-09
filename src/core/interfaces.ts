import { NodeType, NodeConfig } from '../config';

export interface INodeExecutor {
  execute(inputs: Record<string, any>): Promise<any>;
}

export interface IExecutionContext {
  pipelineId: string;
  executionId: string;
  templateId: string;
  inputs: Record<string, any>;
}

export interface IExecutionResult {
  nodeId: string;
  status: 'completed' | 'failed';
  startTime: Date;
  endTime: Date;
  input: Record<string, any>;
  output: any;
  error?: string;
}

export interface IPipelineExecutor {
  executePipeline(pipelineId: string, inputs: Record<string, any>): Promise<void>;
}
