'use strict';

// const fs = require('fs');

module.exports = app => {
  class PhotoController extends app.Controller {
    * insert() {
      console.log(this.ctx.request);
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.photo.insert(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.photo.select(this.ctx.request.body);
    }
  }
  return PhotoController;
};
