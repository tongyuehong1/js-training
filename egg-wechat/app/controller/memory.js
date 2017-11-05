'use strict';

module.exports = app => {
  class EssayController extends app.Controller {
    * insert() {
      this.ctx.body = yield this.service.memory.insert(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.memory.select(this.ctx.request.body);
    }
  }
  return EssayController;
};
