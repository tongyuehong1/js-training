'use strict';

module.exports = app => {
  class Hearts extends app.Service {
    * insert(letter) {
      try {
        yield app.mysql.insert('write', letter);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select(_wechat) {
      let res;
      try {
        res = yield app.mysql.select('write', {
          where: { wechat: _wechat.wechat },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * selectanother(_wechat) {
      let res;
      try {
        res = yield app.mysql.select('user', {
          where: { wechat: _wechat.wechat },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * anotherlist(_wechat) {
      let res;
      try {
        res = yield app.mysql.select('write', {
          where: { wechat: _wechat.wechat },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * delete(_id) {
      try {
        yield app.mysql.delete('write', {
          where: { Id: _id.id },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Hearts;
};
