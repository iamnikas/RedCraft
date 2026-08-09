import { NodeType } from 'src/config';
import { BaseNode } from './BaseNode';
import { LoggingService } from './../logging/LoggingService';

export class InputNode extends BaseNode {
  private readonly logger: LoggingService;

  constructor (id: string, type: NodeType, config: any) {
    super(id, type, config);
    this.logger = new LoggingService();
    // this.logger.info(`[InputNode][constructor] id: ${id}, type: ,${type}, config:, ${JSON.stringify(config)}`);
    console.log('[InputNode][constructor] id:', id, 'type:', type, 'config:', config);
  }

  public async execute (inputs: Record<string, any>): Promise<any> {
    // this.logger.info(`[InputNode][execute][0] inputs: ${JSON.stringify(inputs)}`);
    // // this.logger.info(`[InputNode][execute][0] config: ${JSON.stringify(this.config)}`);
    console.log('[InputNode][execute][0] inputs:', inputs);
    console.log('[InputNode][execute][0] config:', this.config);

    const inputName: any = this.config.name;
    // this.logger.info(`[InputNode][execute][1] inputName: ${inputName}`);


    if (!(inputName in inputs)) {
      throw new Error(`Required input "${inputName}" not provided`);
    }

    // this.logger.info(`[InputNode][execute][end] input: ${JSON.stringify(inputs[inputName])}`);
    console.log('[InputNode][execute][end] input:', inputs[inputName]);
    return inputs[inputName];
  }
}
