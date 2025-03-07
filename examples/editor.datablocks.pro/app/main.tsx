// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ReactFlowProvider } from '@xyflow/react';
import App from './App';

// Кастомная тема для Chakra UI
const theme = extendTheme({
  colors: {
    brand: {
      50: '#e3f2fd',
      100: '#bbdefb',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
    },
    silverDarken30: 'rgba(0, 0, 0, 0.3)',
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
  },
});

// Корневой элемент приложения
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ReactFlowProvider>
        <App />
      </ReactFlowProvider>
    </ChakraProvider>
  </React.StrictMode>
);