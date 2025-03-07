import { NodeType } from './../config';
import { LoggingService } from './../logging/LoggingService';
import { BaseNode } from './BaseNode';

export class TransformNode extends BaseNode {
  private readonly logger: LoggingService;

  constructor (id: string, type: NodeType, config: any) {
    super(id, type, config);
    this.logger = new LoggingService();
  }

  async execute (inputs: Record<string, any>): Promise<any> {
    console.log('[TransformNode] inputs:', inputs);

    if (this.config.operation === 'math') {
      switch (this.config.method) {
        case 'plus': {
          return Object.values(inputs).map((v) => v.value).reduce((a, b) => a + b, 0);
        }

        case 'minus': {
          const values = Object.values(inputs).map((v) => v.value);
          return values.slice(1).reduce((a, b) => a - b, values[0]);
        }

        default:
          throw new Error(`Unknown math operation: ${this.config.method}`);
      }
    }
    throw new Error(`Unknown operation type: ${this.config.operation}`);
  }
}
