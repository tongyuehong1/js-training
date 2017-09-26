/**
 * 2017-09-25   Tong Yuehong
 */
'use strict';

module.exports = app => {
  class TestController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.test.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.test.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.test.get(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.test.update(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.test.select(this.ctx.request.body);
    }
    * set() {
      this.ctx.body = yield this.service.test.set();
    }
  }
  return TestController;
};
