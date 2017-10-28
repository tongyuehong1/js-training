'use strict';

module.exports = app => {
  class Essay extends app.Service {
    * first() {
      let res;
      try {
        res = yield app.mysql.select('essay', {
          where: { id: 1 },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * second() {
      let res;
      try {
        res = yield app.mysql.select('essay', {
          where: { id: 2 },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * third() {
      let res;
      try {
        res = yield app.mysql.select('essay', {
          where: { id: 3 },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Essay;
};
