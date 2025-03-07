export class PipelineValidator {
  private readonly nodes: any[];
  private readonly connections: any[];
  private readonly nodeDefinitions: any;
  private errors: any[] = [];

  constructor (nodes: any[], connections: any[], nodeDefinitions: any) {
    this.nodes = nodes;
    this.connections = connections;
    this.nodeDefinitions = nodeDefinitions;
  }

  validate (): { isValid: boolean; errors: any[] } {
    this.errors = [];

    // Проверяем каждое соединение на совместимость типов
    this.connections.forEach((conn) => {
      const sourceNode = this.nodes.find((n) => n.id === conn.sourceNodeId);
      const targetNode = this.nodes.find((n) => n.id === conn.targetNodeId);
      if (!sourceNode || !targetNode) {
        this.errors.push({
          type: 'error',
          message: `Соединение ${conn.id} ссылается на несуществующие узлы.`,
        });
        return;
      }

      const sourceDef = this.nodeDefinitions[sourceNode.type];
      const targetDef = this.nodeDefinitions[targetNode.type];

      if (!sourceDef || !targetDef) {
        this.errors.push({
          type: 'error',
          message: `Неизвестный тип узла: ${sourceNode.type} или ${targetNode.type}.`,
        });
        return;
      }

      const sourceOutputType = sourceDef.outputs?.[conn.sourcePort]?.type;
      const targetInputType = targetDef.inputs?.[conn.targetPort]?.type;

      if (sourceOutputType && targetInputType && sourceOutputType !== targetInputType) {
        this.errors.push({
          type: 'error',
          message: `Тип выходных данных ${sourceOutputType} узла ${sourceNode.id} несовместим с входными данными ${targetInputType} узла ${targetNode.id}.`,
        });
      }
    });

    // Проверяем количество входов
    this.nodes.forEach((node) => {
      const nodeDef = this.nodeDefinitions[node.type];
      if (!nodeDef) {
        return;
      }

      const incomingConnections = this.connections.filter((conn) => conn.targetNodeId === node.id);
      const requiredInputs = Object.keys(nodeDef.inputs || {});

      requiredInputs.forEach((inputKey) => {
        if (!incomingConnections.some((conn) => conn.targetPort === inputKey)) {
          this.errors.push({
            type: 'error',
            message: `Узел ${node.id} ожидает входные данные в порт ${inputKey}, но они не были предоставлены.`,
          });
        }
      });
    });

    return { isValid: this.errors.length === 0, errors: this.errors };
  }

  getErrors (): any[] {
    return this.errors;
  }
}
