'use strict';

module.exports = app => {
  class EssayController extends app.Controller {
    * essay() {
      this.ctx.body = yield this.service.essay.essay();
    }
    // * img() {
    //   this.ctx.body = yield this.service.essay.img();
    // }
    // * brief() {
    //   this.ctx.body = yield this.service.essay.brief();
    // }
  }
  return EssayController;
};
