'use strict';

module.exports = app => {
  class MissingController extends app.Controller {
    * insert() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.missing.insert(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.missing.select(this.ctx.request.body);
    }
    * update() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.missing.update(this.ctx.request.body);
    }
  }
  return MissingController;
};
