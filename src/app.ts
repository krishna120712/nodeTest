import express from "express";
import * as bodyParser from "body-parser";
import Routes from "./routes/routes";
import ServiceContext from "./utils/serviceContext";
import appConfig from "./config/appConfig";

class NodeTest {
  public app: express.Application;
  private serviceContext: ServiceContext;

  constructor() {
    console.log("App init");
    this.app = express();
    this.config();
  }

  public async init() {
    try {
      this.startServer();
      this.setServiceContext();
      new Routes(this.app, this.serviceContext);
    } catch (ex) {
      console.log("error from init ", ex);
    }
  }

  private config(): void {
    console.log("Config");
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private startServer(): void {
    const port = appConfig.port || 5000;
    console.log(port);
    this.app.listen(port, () =>
      console.log(`Server running on port ${port} !`)
    );
  }

  private setServiceContext(): void {
    this.serviceContext = new ServiceContext();
  }
}

(async () => {
  try {
    let nodeService = new NodeTest();
    await nodeService.init();
  } catch (ex) {
    console.error(ex);
  }
})();
