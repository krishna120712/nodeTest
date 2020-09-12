import { Application } from 'express';
import Controller from '../controllers/controller';
import ServiceContext from '../utils/serviceContext';

export default class Routes {
  private controller: Controller;
  private svcContext: ServiceContext;

  constructor(app: Application, serviceContext: ServiceContext) {
    this.svcContext = serviceContext;
    this.controller = new Controller(this.svcContext);
    this.initializeRoutes(app);
  }

  /**
   * Method to initialize all the routes for the application..
   * @param app
   */
  private initializeRoutes(app: Application) {
    app.route('/api/v1/parse').post(this.controller.post.bind(this.controller));
    app.route('/api/v2/parse').post(this.controller.post.bind(this.controller));
  }
}