import ServiceContext from "../utils/serviceContext";
import Logger from "../middlewares/logger";
import { modelV1 } from "../interfaces/models";
import Parce from "../process/parse";

export default class ParseV1 {
  private svcContext: ServiceContext;
  private logger: Logger;
  private parse: Parce;

  constructor(serviceContext: ServiceContext) {
    this.svcContext = serviceContext;
    this.logger = this.svcContext.logger;
    this.parse = new Parce(serviceContext);
  }

  async post(body: string, path: string): Promise<modelV1> {
    try {
      let result = await this.parse.processParse(body, path);
      return Promise.resolve(result as modelV1);
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  async getPathVariable(path: string) {
    try {
      let pathArr = path.split("/");
      return Promise.resolve(pathArr[2]);
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
