import LoggerService from '../middlewares/logger';

export default class ServiceContext {

  private appLogger: LoggerService;

  constructor() {
    this.appLogger = new LoggerService('app');
  }

  get logger() {
    return this.appLogger;
  }
}
