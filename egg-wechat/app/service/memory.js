'use strict';

module.exports = app => {
  class Essay extends app.Service {
    * insert(memory) {
      let res;
      try {
        res = yield app.mysql.insert('memory', memory);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * select(_wechat) {
      let res;
      try {
        res = yield app.mysql.select('memory', {
          where: { wechat: _wechat.wechat },
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
