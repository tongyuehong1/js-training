'use strict';

module.exports = app => {
  class Home extends app.Service {
    * home() {
      let res;
      try {
        res = yield app.mysql.select('home');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Home;
};
