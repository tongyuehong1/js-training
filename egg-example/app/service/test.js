/**
 * 2017-09-24    Tong Yuehong
 */
'use strict';

module.exports = app => {
  class Test extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * get(req) {
      let res;
      try {
        res = yield app.mysql.get('user', req); // select
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    * delete(param) {
      try {
        yield app.mysql.delete('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(par) {
      try {
        yield app.mysql.update('user', par);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Test;
};
