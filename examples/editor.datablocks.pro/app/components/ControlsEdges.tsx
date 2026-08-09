import React from 'react';
import { useStore } from '../store';
import { NODE_TYPES } from '../constants';

// Вспомогательные функции
const getNewNodePosition = (nodes: any[]) => {
    const padding = 20;
    const defaultPosition = { x: 100, y: 100 };

    if (nodes.length === 0) return defaultPosition;

    // Находим самую нижнюю позицию среди существующих узлов
    const maxY = Math.max(...nodes.map(node => node.position.y));
    return {
        x: defaultPosition.x,
        y: maxY + 150 + padding // 150 - примерная высота узла
    };
};


const getNodeConfig = (type: string) => {
    const configs = {
        'INPUT_FILE': {
            type: 'input-file',
            label: 'File Input',
            defaultData: {
                fileType: 'json',
                content: null
            }
        },
        'INPUT_PASTE': {
            type: 'input-paste',
            label: 'Paste Input',
            defaultData: {
                dataType: 'json',
                text: '',
                current: null
            }
        },
        'INPUT_HTTP': {
            type: 'input-http',
            label: 'HTTP Input',
            defaultData: {
                url: '',
                current: null
            }
        },
        'INPUT_SHEETS': {
            type: 'input-sheets',
            label: 'Sheets Input',
            defaultData: {
                selectedSheet: '',
                sheets: [],
                current: null
            }
        },
        'INPUT_EXAMPLE': {
            type: 'input-example',
            label: 'Example Data',
            defaultData: {
                selectedDataset: '',
                current: null
            }
        }
    };

    return configs[type] || configs['INPUT_PASTE'];
};

export const ControlsEdges: React.FC = () => {
    const addNode = useStore(state => state.addNode);
    const nodes = useStore(state => state.nodes);


    const addItem = (type: string) => {
        // Вычисляем позицию для нового узла
        const position = getNewNodePosition(nodes);
        
        // Создаем конфигурацию узла в зависимости от типа
        const nodeConfig = getNodeConfig(type);
        
        // Создаем новый узел
        const newNode = {
            id: `${type}-${nodes.length + 1}`,
            type: nodeConfig.type,
            position,
            data: {
                ...nodeConfig.defaultData,
                label: nodeConfig.label
            }
        };

        addNode(newNode);
    };

    return (
        <div className="control-wrapper">
            <div className="item"><button onClick={() => {addItem('INPUT_FILE')}}>Add Input File</button></div>
            <div className="item"><button onClick={() => {addItem('INPUT_PASTE')}}>Add Input Paste</button></div>
        </div>
    ); 
}