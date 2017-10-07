'use strict';

module.exports = app => {
  class TrainingController extends app.Controller {
    * insert() {
      this.ctx.body = yield this.service.training.insert(this.ctx.request.body);
    }
  }
  return TrainingController;
};
