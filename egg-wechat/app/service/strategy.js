'use strict';

module.exports = app => {
  class Missing extends app.Service {
    * select() {
      let res;
      try {
        res = yield app.mysql.select('strategy');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Missing;
};
