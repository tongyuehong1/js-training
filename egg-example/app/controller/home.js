'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = yield this.service.home.find();
    }
    * index1() {
      this.ctx.body = 'hi, 123';
    }
  }
  return HomeController;
};
