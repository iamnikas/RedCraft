import dotenv from 'dotenv';
import { PipelineExecutor } from './core/PipelineExecutor';

dotenv.config();

const start = async () => {
  try {
    const executor = new PipelineExecutor();

    // Тестовый запуск пайплайна
    await executor.executePipeline('math-pipeline-001', {// Ввод параметров и переменных
      'input-4': 7,
      'input-5': 2,
    });

    console.info('Pipeline executed successfully');
  } catch (error) {
    console.error(`Error starting the app: ${error}`);
    process.exit(1);
  }
};

// Стартуем сервис и функции
start();

// Gracefull shutdown
const shutdown = async () => {
  console.info('Shutting down...');
  process.exit(0);
};

// Обработчик сигнала SIGTERM, SIGINT
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);


