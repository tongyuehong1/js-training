'use strict';

module.exports = app => {
  class Hearts extends app.Service {
    * insert(letter) {
      try {
        yield app.mysql.insert('send', letter);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select(_wechat) {
      let res;
      try {
        res = yield app.mysql.select('send', {
          where: { wechat: _wechat.wechat },
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
