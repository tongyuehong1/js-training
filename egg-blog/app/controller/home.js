'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * select() {
      this.ctx.body = yield this.service.home.select();
    }
  }
  return HomeController;
};
