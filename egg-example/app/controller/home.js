/**
 * 2017-09-24   Tong Yuehong
 */
'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const s = this.ctx.helper.foo(this.ctx.request.query.a);
      this.ctx.body = s + this.ctx.helper.foo(this.ctx.request.query.b);
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
      const f = yield this.service.lodash.findIndex();
      this.ctx.body = `chunk ${c}  compact ${k}  findIndex ${f} `;
    }
    * home() {
      const result = yield this.ctx.curl('https://registry.npm.taobao.org/egg/latest', {
        // 自动解析 JSON response
        dataType: 'json',
        // 3 秒超时
        timeout: 3000,

      });
      this.ctx.body = {
        status: result.status,
        headers: result.headers,
        package: result.data,
      };
    }
    * countBy() {
      this.ctx.body = yield this.service.lodash.countBy();
    }
    * every() {
      this.ctx.body = yield this.service.lodash.every();
    }
  }
  return HomeController;
};
