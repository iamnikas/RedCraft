import { readFileSync } from 'fs';

export class PipelineRepository {
  private pipelines: any[];
  private nodes: any[];
  private templates: any[];


  constructor () {
    this.pipelines = JSON.parse(readFileSync('./src/example.json', 'utf-8')).pipelines;
    this.templates = JSON.parse(readFileSync('./src/example.json', 'utf-8')).templates;
  }

  public findPipelineById (pipelineId: string) {
    return this.pipelines.find((p) => p.id === pipelineId);
  }

  public findTemplateById (templateId: string) {
    return this.templates.find((t) => t.id === templateId);
  }

  public findTemplateNodeByNodeId (templateId: string, nodeId: string) {
    return this.findTemplateById(templateId)?.nodes.find((n: any) => n.id === nodeId);
  }

  public findConnectionTempalateConectionId (templateId: string, conectionId: string) {
    return this.findTemplateById(templateId)?.connection.find((c: any) => c.id === conectionId);
  }
}
