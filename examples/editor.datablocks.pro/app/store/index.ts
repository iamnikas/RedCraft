// src/store/index.ts
import create from 'zustand';
import { 
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges
} from '@xyflow/react';

interface Log {
  method: 'info' | 'error' | 'warning';
  data: string[];
  timestamp?: number;
}

interface NodeData {
  label: string;
  [key: string]: any;
}

interface CustomNode extends Node {
  data: NodeData;
}

interface StoreState {
  nodes: Node[];
  edges: Edge[];
  logs: Log[];
  
  // Методы для работы с узлами
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
  updateNodeData: (params: { id: string; data: any }) => void;
  addNode: (node: CustomNode) => void;
  // Методы для работы с логами
  addLogs: (log: Log) => void;
  clearLogs: () => void;
}

export const useStore = create<StoreState>((set, get) => ({
  nodes: [],
  edges: [],
  logs: [],

  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },

  addNode: (node: CustomNode) => {
    set({
      nodes: [...get().nodes, node],
    });
  },


  updateNodeData: ({ id, data }) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            data: { ...node.data, ...data },
          };
        }
        return node;
      }),
    });
  },

  addLogs: (log: Log) => {
    set({
      logs: [...get().logs, { ...log, timestamp: Date.now() }],
    });
  },

  clearLogs: () => {
    set({ logs: [] });
  },
}));