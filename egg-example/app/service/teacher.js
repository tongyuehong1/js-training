/**
 * 2017-09-26    Tong Yuehong
 */
'use strict';

module.exports = app => {
  class Student extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('teacher', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * get(pro) {
      let res;
      try {
        res = yield app.mysql.get('teacher', pro); // select
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    * delete(param) {
      try {
        yield app.mysql.delete('teacher', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(par) {
      try {
        yield app.mysql.update('teacher', par);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * set() {
      const conn = yield app.mysql.beginTransaction();
      try {
        yield conn.insert('teacher', { name: 'li', sno: 1 });
        yield conn.insert('teacher', { name: 'wang', sno: 2 });
        yield conn.insert('teacher', { name: 'zhang', sno: 3 });
        yield conn.commit();
      } catch (e) {
        yield conn.rollback();
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Student;
};
