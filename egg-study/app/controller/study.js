/**
 * 2017-09-27   Tong Yuehong
 */
'use strict';

module.exports = app => {
  class StudyController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.study.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.study.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.study.get(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.study.update(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.study.select(this.ctx.request.body);
    }
    * set() {
      this.ctx.body = yield this.service.study.set();
    }
  }
  return StudyController;
};
