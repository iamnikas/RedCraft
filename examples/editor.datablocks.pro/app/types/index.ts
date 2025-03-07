// src/types/index.ts
export interface NodeData {
    id: string;
    type: string;
    data: any;
    position: { x: number; y: number };
  }
  
  export interface EdgeData {
    id: string;
    source: string;
    target: string;
  }