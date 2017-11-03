'use strict';

module.exports = app => {
  class EssayController extends app.Controller {
    * select() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.essay.select(this.ctx.request.body);
    }
  }
  return EssayController;
};
