'use strict';

module.exports = app => {
  class Hearts extends app.Service {
    * insert(letter) {
      try {
        yield app.mysql.insert('letters', letter);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select(_wechat) {
      let res;
      try {
        res = yield app.mysql.select('letters', {
          where: { wechat: _wechat },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Hearts;
};
