'use strict';

module.exports = app => {
  class Home extends app.Service {
    * select(_type) {
      let res;
      try {
        res = yield app.mysql.select('essay', {
          where: { type: _type.type },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Home;
};
