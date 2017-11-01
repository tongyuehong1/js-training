'use strict';

module.exports = app => {
  class Essay extends app.Service {
    * essay() {
      let res;
      try {
        res = yield app.mysql.select('showessay');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Essay;
};
