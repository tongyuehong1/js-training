'use strict';

module.exports = app => {
  const MAX_VOTES = 3;
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
    * list() {
      let res;
      try {
        res = yield app.mysql.get('production', {
          columns: 'poll',
          order: [ 'poll', 'desc' ],
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * vote(userid, productionid) {
      const vote = yield app.mysql.get('user', {
        where: { id: userid },
        columns: 'vote',
      });
      const poll = yield app.mysql.get('production', {
        where: { userid: productionid },
        column: 'poll',
      });
      const conn = yield app.mysql.beginTransaction();
      if (vote < MAX_VOTES) {
        try {
          yield conn.update('user', { vote: vote + 1 });
          yield conn.update('production', { poll: poll + 1 });
          yield conn.commit();
        } catch (e) {
          yield conn.rollback();
          this.ctx.logger.error(e);
          return false;
        }
        return true;
      }
    }
    * model(model) {
      try {
        yield app.mysql.update('production', model);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Project;
};
