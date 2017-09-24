/**
 * 2017-09-24   Tong Yuehong
 */
'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = yield this.service.home.find();
    }
    * index1() {
      this.ctx.body = 'hi, 123';
    }
    * sina() {
      const r = yield this.service.home.sina();
      this.ctx.body = r;
    }
    * sohu() {
      const t = yield this.service.home.sohu();
      this.ctx.body = t;
    }
    * test() {
      const k = yield this.service.test.test();
      const r = yield this.service.home.test();
      this.ctx.body = r + k;
    }
    * lodash() {
      const c = yield this.service.lodash.chunk();
      const k = yield this.service.lodash.compact();
      this.ctx.body = `chunk ${c}  compact ${k} `;
    }
  }
  return HomeController;
};
