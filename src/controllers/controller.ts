import { Request, Response, NextFunction } from "express";
import ServiceParse from "../services/service";
import ServiceContext from "../utils/serviceContext";
import Logger from "../middlewares/logger";
import { responseV1 } from "../interfaces/models";

export default class Parse {
  private appContext: ServiceContext;
  private service: ServiceParse;
  private logger: Logger;

  constructor(serviceContext: ServiceContext) {
    this.appContext = serviceContext;
    this.service = new ServiceParse(this.appContext);
    this.logger = this.appContext.logger;
  }

  async post(req: Request, res: Response): Promise<Response> {
    try {
      let pathVarible = await this.service.getPathVariable(req.url);
      this.logger.info("Controller : " + pathVarible + " Parse");
      const response: responseV1 = {
        statusCode: 200,
        data: await this.service.post(req.body.data, pathVarible),
      };
      return res.json(response);
    } catch (ex) {
      return res.json({ Error: ex.message });
    }
  }
}
