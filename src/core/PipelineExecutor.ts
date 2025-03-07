import { PipelineRepository } from './../repository/PipelineRepository';
import { ExecutionRepository } from './../repository/ExecutionRepository';
import { TransformNode } from './../nodes/TransformNode';
import { InputNode } from './../nodes/InputNode';
import { ReturnNode } from './../nodes/ReturnNode';
import { LoggingService } from './../logging/LoggingService';
import { ErrorHandler } from './../error/ErrorHandler';

export class PipelineExecutor {
  private readonly pipelineRepo: PipelineRepository;
  private readonly executionRepo: ExecutionRepository;
  private readonly logger: LoggingService;
  private readonly errorHandler: ErrorHandler;

  constructor () {
    this.pipelineRepo = new PipelineRepository();
    this.executionRepo = new ExecutionRepository();
    this.logger = new LoggingService();
    this.errorHandler = new ErrorHandler();
  }

  async executePipeline (pipelineId: string, inputs?: Record<string, any>): Promise<void> {
    try {
      const pipeline = this.pipelineRepo.findPipelineById(pipelineId);
      if (!pipeline) {
        throw new Error(`Pipeline ${pipelineId} not found`);
      }
      this.logger.info(`[executePipeline] Executing pipeline: ${pipeline.name}`);

      const executionLog0 = { pipelineId, timestamp: new Date(), status: 'running', result: null };
      this.executionRepo.logExecution(executionLog0);

      const nodeOutputs = new Map<string, any>();
      const template = this.pipelineRepo.findTemplateById(pipeline.templateId);
      const { nodes, connections } = template;

      for await (const node of nodes) {
        console.log('[executePipeline] node:', node);
        let output;

        if (node.type === 'input') {
          output = inputs?.[node.id] ?? null;
          if (node.config.inputType === 'number') {
            output = Number(output);
          } else if (node.config.inputType === 'string') {
            output = String(output);
          }
        } else {
          const nodeInputs = this.collectNodeInputs(node.id, connections, nodeOutputs);
          const executor = this.createNodeExecutor(node);
          output = await executor.execute(nodeInputs);
        }

        console.log(`[executePipeline] output for node "${node.id}":`, output);
        nodeOutputs.set(node.id, output);

        // Значение перезаписываем
        nodeOutputs.set('return-result', output);
      }

      const result = nodeOutputs.get('return-result');
      const executionLog1 = {
        pipelineId,
        timestamp: new Date(),
        status: 'success',
        result,
        executionTrace: [...nodeOutputs.entries()].map(([nodeId, output]) => ({
          nodeId,
          status: 'completed',
          timestamp: new Date(),
          output,
        })),
      };
      this.executionRepo.logExecution(executionLog1);
      console.log('[executePipeline] result:', result);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }

  private createNodeExecutor (node: any) {
    switch (node.type) {
      case 'input':
        return {
          execute: async () => node.config.value,
        };

      case 'transform':
        return new TransformNode(node.id, node.type, node.config);

      case 'return':
        return new ReturnNode(node.id, node.type, node.config);

      case 'number':
        return {
          execute: async () => node.config.value,
        };

      default:
        throw new Error(`Unknown node type: ${node.type}`);
    }
  }

  private collectNodeInputs (nodeId: string, connections: any[], nodeOutputs: Map<string, any>) {
    const inputs: Record<string, any> = {};
    connections
      .filter((conn) => conn.targetNodeId === nodeId)
      .forEach((conn) => {
        inputs[conn.targetPort] = {
          value: nodeOutputs.get(conn.sourceNodeId) ?? null,
          sourceNodeId: conn.sourceNodeId,
          targetPort: conn.targetPort,
        };
      });
    return inputs;
  }
}
