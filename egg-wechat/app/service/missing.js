'use strict';
const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  class Missing extends app.Service {
    * insert(dates) {
      try {
        yield app.mysql.insert('missing', dates);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select(_wechat) {
      let res;
      try {
        res = yield app.mysql.select('missing', {
          where: { wechat: _wechat.wechat },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * update(dates) {
      try {
        console.log(dates);
        yield app.mysql.update('missing', dates);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Missing;
};
