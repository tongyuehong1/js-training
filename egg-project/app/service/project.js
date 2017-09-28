/**
 * 2017-09-24    Tong Yuehong
 */
'use strict';

module.exports = app => {
  class Test extends app.Service {
    * insert(param) {
      try {
        yield app.mysql.insert('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * insert1(param) {
      try {
        yield app.mysql.insert('production', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    /*
    * get(re) {
      let res;
      try {
        res = yield app.mysql.get('user', re);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * select() {
      let res;
      try {
        res = yield app.mysql.select('user', {
          where: {
            name: [ 'tong', 'a' ],
          },
        });
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
    * set() {
      const conn = yield app.mysql.beginTransaction();
      try {
        yield conn.update('user', { id: 2, age: 999 });
        yield conn.insert('student', { name: 'zhao', sno: 1 });
        yield conn.insert('student', { name: 'qian', sno: 2 });
        yield conn.insert('student', { name: 'sun', sno: 3 });
        yield conn.insert('student', { name: 'sun', sno: 4 });
        yield conn.commit();
      } catch (e) {
        yield conn.rollback();
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }*/
  }
  return Test;
};
