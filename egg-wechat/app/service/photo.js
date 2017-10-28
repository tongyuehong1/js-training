'use strict';

module.exports = app => {
  class Photo extends app.Service {
    * insert(dates) {
      try {
        yield app.mysql.insert('photo', dates);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select(_wechat) {
      let res;
      try {
        res = yield app.mysql.select('photo', {
          where: { wechat: _wechat.wechat },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Photo;
};
