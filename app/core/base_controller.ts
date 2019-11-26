import { Controller } from "egg";

export default class BaseController extends Controller {
  get user() {
    return false;
  }
  validate(rules, params) {    
    try {
      this.ctx.validate(rules, params);
    } catch (err) {
      // this.ctx.logger.warn(err.errors);
      this.ctx.error(40001, "", err.errors);
      return;
    }
  }
  
}
