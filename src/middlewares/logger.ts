const winston = require("winston");
import appConfig from "../config/appConfig";
/**
 * Module for logging
 */
export default class LoggerService {
  private log_data: any;
  private route: string;
  private logger: any;
  constructor(route: string) {
    this.log_data = null;
    this.route = route;
    const logger = winston.createLogger({
      level: appConfig.debugLevel,
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: `./logs/${route}.log`,
        }),
      ],
      format: winston.format.printf((info: any) => {
        let message = ` | ${info.level.toUpperCase()} | ${route}.log | ${
          info.message
        } | `;
        message = info.obj
          ? message + `data:${JSON.stringify(info.obj)} | `
          : message;
        message = this.log_data
          ? message + `log_data:${JSON.stringify(this.log_data)} | `
          : message;
        return message;
      }),
    });
    this.logger = logger;
  }

  setLogData(log_data: any) {
    this.log_data = log_data;
  }

  async info(message: string, obj?: any): Promise<void> {
    this.logData("info", message, obj);
  }

  async debug(message: string, obj?: any) {
    this.logData("debug", message, obj);
  }

  async error(message: string, obj?: any) {
    this.logData("error", message, obj);
  }

  private async logData(
    level: string,
    message: string,
    obj: any
  ): Promise<void> {
    if (obj) {
      this.logger.log("info", message, {
        obj,
      });
    } else {
      this.logger.log("info", message);
    }
  }
}
