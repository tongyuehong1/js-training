'use strict';

// const fs = require('fs');

module.exports = app => {
  class PhotoController extends app.Controller {
    * insert() {
      this.ctx.body = yield this.service.photo.insert(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.photo.select(this.ctx.request.body);
    }
  }
  return PhotoController;
};
