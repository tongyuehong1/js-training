'use strict';

module.exports = app => {
  class HeartsController extends app.Controller {
    * insert() {
      // console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.hearts.insert(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.hearts.select(this.ctx.request.body);
    }
    * selectanother() {
      this.ctx.body = yield this.service.hearts.selectanother(this.ctx.request.body);
    }
    * anotherlist() {
      this.ctx.body = yield this.service.hearts.anotherlist(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.hearts.delete(this.ctx.request.body);
    }
  }
  return HeartsController;
};
