/**
 * 2017-09-26    Tong Yuehong
 */
'use strict';

module.exports = app => {
  class Student extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('student', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * get(pro) {
      let res;
      try {
        res = yield app.mysql.get('student', pro); // select
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    * delete(param) {
      try {
        yield app.mysql.delete('student', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(par) {
      try {
        yield app.mysql.update('student', par);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Student;
};
