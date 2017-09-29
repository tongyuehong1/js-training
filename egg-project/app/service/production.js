'use strict';

module.exports = app => {
  class Project extends app.Service {
    * upload(production) {
      try {
        yield app.mysql.update('production', production);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * list(production) {
      let res;
      try {
        res = yield app.mysql.get('production', {
          where: {
            id: production,
          },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * vote() {
      const vote = yield app.mysql.get('user', { column: 'vote' });
      const poll = yield app.mysql.get('production', { column: 'poll' });
      const conn = yield app.mysql.beginTransaction();
      try {
        yield conn.update('user', { vote: vote + 1 });
        yield conn.update('user', { poll: poll + 1 });
        yield conn.commit();
      } catch (e) {
        yield conn.rollback();
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Project;
};
