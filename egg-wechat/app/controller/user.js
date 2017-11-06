'use strict';

module.exports = app => {
  class UserController extends app.Controller {
    * insert() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.user.insert(this.ctx.request.body);
    }
    * select() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.user.select(this.ctx.request.body);
    }
  }
  return UserController;
};
