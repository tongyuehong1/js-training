'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      console.log(this.ctx.request.body);
      this.ctx.body = 'hi, egg';
    }
  }
  return HomeController;
};
