// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Используем SWC для более быстрой компиляции
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react({
      // Включаем быструю перезагрузку для React компонентов
      fastRefresh: true,
      // Включаем поддержку JSX Runtime
      jsxRuntime: 'automatic',
      // Включаем поддержку эмоций для Chakra UI
      jsxImportSource: '@emotion/react',
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'hooks': path.resolve(__dirname, './src/hooks'),
      'store': path.resolve(__dirname, './src/store'),
      'types': path.resolve(__dirname, './src/types'),
      'utils': path.resolve(__dirname, './src/utils'),
    }
  },
  server: {
    port: 3000,
    open: true,
    // Добавляем CORS для разработки
    cors: true,
    // Добавляем HMR
    hmr: {
      overlay: true,
    }
  },
  // Добавляем оптимизации для продакшена
  build: {
    target: 'esnext',
    sourcemap: true,
    minify: 'esbuild',
    // Разделение чанков
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'chakra': ['@chakra-ui/react'],
          'reactflow': ['@xyflow/react'],
        }
      }
    }
  },
  // Добавляем поддержку TypeScript
  optimizeDeps: {
    include: ['react', 'react-dom', '@xyflow/react', '@chakra-ui/react']
  }
});