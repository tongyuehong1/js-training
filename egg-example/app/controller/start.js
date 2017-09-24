/**
 * 2017-09-24   Tong Yuehong
 */
'use strict';

module.exports = app => {
  class StartController extends app.Controller {
    * stu() {
      this.ctx.body = yield this.service.stu.stu();
    }
    * date() {
      this.ctx.body = yield this.service.home.date();
    }
  }
  return StartController;
};
