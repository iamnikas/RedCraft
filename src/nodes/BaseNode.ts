
import { NodeType, NodeConfig } from './../config';
import { INodeExecutor } from './../core/interfaces';

export abstract class BaseNode implements INodeExecutor {

  constructor (
    protected readonly id: string,
    protected readonly type: NodeType,
    protected readonly config: NodeConfig,
  ) {}



  abstract execute(inputs: Record<string, any>): Promise<any>;
}
