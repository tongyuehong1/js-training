'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * home() {
      this.ctx.body = yield this.service.home.home();
    }
  }
  return HomeController;
};
