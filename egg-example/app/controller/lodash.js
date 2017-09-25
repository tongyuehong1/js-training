/**
 * 2017-09-25   Tong Yuehong
 */
'use strict';
module.exports = app => {
  class LodashController extends app.Controller {
    * countBy() {
      this.ctx.body = yield this.service.lodash.countBy();
    }
    * every() {
      this.ctx.body = yield this.service.lodash.every();
    }
    * filter() {
      this.ctx.body = yield this.service.lodash.filter();
    }
  }
  return LodashController;
};
