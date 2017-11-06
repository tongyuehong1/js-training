'use strict';

module.exports = app => {
  class PhotoController extends app.Controller {
    * insert() {
      this.ctx.body = yield this.service.temporary.insert(this.ctx.request.body);
    }
    * select() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.temporary.select(this.ctx.request.body);
    }
  }
  return PhotoController;
};
