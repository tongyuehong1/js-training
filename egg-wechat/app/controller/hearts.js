'use strict';

module.exports = app => {
  class HeartsController extends app.Controller {
    * insert() {
      // console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.hearts.insert(this.ctx.request.body);
    }
    * select() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.hearts.select(this.ctx.request.body);
    }
    * selectanother() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.hearts.selectanother(this.ctx.request.body);
    }
    * anotherlist() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.hearts.anotherlist(this.ctx.request.body);
    }
    * delete() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.hearts.delete(this.ctx.request.body);
    }
  }
  return HeartsController;
};
