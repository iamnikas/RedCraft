export class ErrorHandler {
  handleError(error: any): void {
    console.error(`Error: ${error.message}`);
  }
}
