'use strict';

module.exports = app => {
  class StrategyController extends app.Controller {
    * select() {
      // console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.strategy.select(this.ctx.request.body);
    }
  }
  return StrategyController;
};
