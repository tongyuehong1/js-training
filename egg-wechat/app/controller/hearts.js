'use strict';

module.exports = app => {
  class HeartsController extends app.Controller {
    * insert() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.hearts.insert(this.ctx.request.body);
    }
    * select() {
      // console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.hearts.select(this.ctx.request.body);
    }
  }
  return HeartsController;
};
