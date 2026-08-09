import winston from 'winston';

export class LoggingService {
  private logger;

  constructor () {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
      ],
    });
  }

  info (message: string) {
    this.logger.info(message);
  }

  warn (message: string) {
    this.logger.warn(message);
  }

  error (message: string) {
    this.logger.error(message);
  }
}
