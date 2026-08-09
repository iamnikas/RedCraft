import { readFileSync, writeFileSync, existsSync, renameSync } from 'fs';
import { join } from 'path';

export class ExecutionRepository {
  private executions: any[];
  private filePath: string;

  constructor () {
    this.filePath = './src/executions.json';
    this.initializeExecutions();
  }

  private initializeExecutions (): void {
    try {
      // Проверяем существование файла
      if (!existsSync(this.filePath)) {
        this.createEmptyExecutionsFile();
        return;
      }

      // Пробуем прочитать и распарсить файл
      const fileContent = readFileSync(this.filePath, 'utf-8');
      this.executions = JSON.parse(fileContent);

      // Проверяем что загруженные данные являются массивом
      if (!Array.isArray(this.executions)) {
        throw new Error('Содержимое файла не является массивом');
      }

    } catch (error) {
      // В случае ошибки создаем резервную копию файла
      const backupFileName = `executions_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
      const backupPath = join('./src', backupFileName);

      try {
        renameSync(this.filePath, backupPath);
        console.warn(`Файл переименован в: ${backupFileName}`);
      } catch (renameError) {
        console.error('Ошибка при переименовании файла:', renameError);
      }

      // Создаем новый файл с пустым массивом
      this.createEmptyExecutionsFile();
    }
  }

  private createEmptyExecutionsFile (): void {
    this.executions = [];
    writeFileSync(this.filePath, JSON.stringify(this.executions, null, 2));
    console.info('Создан новый файл executions.json с пустым массивом');
  }

  logExecution (executionLog: any): void {
    this.executions.push(executionLog);
    writeFileSync(this.filePath, JSON.stringify(this.executions, null, 2));
  }
}
