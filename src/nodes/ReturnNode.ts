import { BaseNode } from './BaseNode';

export class ReturnNode extends BaseNode {
  async execute (inputs: any): Promise<any> {
    return inputs;
  }
}
