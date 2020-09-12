import ServiceContext from "../utils/serviceContext";
import Logger from "../middlewares/logger";

export default class ParseV1 {
  private svcContext: ServiceContext;
  private logger: Logger;

  constructor(serviceContext: ServiceContext) {
    this.svcContext = serviceContext;
    this.logger = this.svcContext.logger;
  }
  async processParse(data: string, path: string) {
    try {
      this.logger.info("Process : " + path + " Parse");
      let result;
      if (path === "v1") {
        result = {
          firstName: data.substring(0, 8),
          lastName: data.substring(8, 18),
          clientId: data.substring(18, 25),
        };
      } else if (path === "v2") {
        result = data.split("0");
        result = {
          firstName: result[0],
          lastName: result[4],
          clientId: result[7].replace(/(\d{3})(\d{4})/, "$1-$2"),
        };
      }
      return Promise.resolve(result);
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
