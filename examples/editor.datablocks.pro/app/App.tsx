// src/App.tsx
import React, { useCallback } from 'react';
import { 
  Background, 
  Controls, 
  MiniMap,
  ReactFlow,
  NodeTypes,
  EdgeTypes,
  Connection,
  Edge,
  Node
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Box } from '@chakra-ui/react';
import { useStore } from './store';

// Импорт компонентов узлов
import InputFile from './components/nodes/InputFile';
import InputPaste from './components/nodes/InputPaste';
import InputSheets from './components/nodes/InputSheets';
import InputHttp from './components/nodes/InputHttp';
import ExampleData from './components/nodes/ExampleData';

import './styles.module.scss';
import { ControlsEdges } from './components/ControlsEdges';

// Определение типов узлов
const nodeTypes: NodeTypes = {
  'input-file': InputFile,
  'input-paste': InputPaste,
  'input-sheets': InputSheets,
  'input-http': InputHttp,
  'input-example': ExampleData,
};

// Определение типов рёбер (если есть кастомные)
const edgeTypes: EdgeTypes = {
  // custom edge types here
};

const App: React.FC = () => {
  // Получаем состояние и методы из store
  const nodes = useStore(state => state.nodes);
  const edges = useStore(state => state.edges);
  const onNodesChange = useStore(state => state.onNodesChange);
  const onEdgesChange = useStore(state => state.onEdgesChange);
  const onConnect = useStore(state => state.onConnect);

  // Обработчик подключения узлов
  const handleConnect = useCallback((connection: Connection) => {
    onConnect?.(connection);
  }, [onConnect]);

  return (
    <Box height="100vh" width="100vw">
      <ControlsEdges />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={handleConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </Box>
  );
};

export default App;