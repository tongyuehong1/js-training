'use strict';

module.exports = app => {
  class EssayController extends app.Controller {
    * first() {
      // console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.essay.first(this.ctx.request.body);
    }
    * second() {
      // console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.essay.second(this.ctx.request.body);
    }
    * third() {
      // console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.essay.third(this.ctx.request.body);
    }
  }
  return EssayController;
};
