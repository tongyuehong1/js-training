'use strict';

module.exports = app => {
  class Project extends app.Service {
    * register(user) {
      try {
        yield app.mysql.insert('user', user);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * login(user) {
      try {
        yield app.mysql.get('user', {
          where: {
            wechat: user,
          },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * set(mobile) {
      try {
        yield app.mysql.insert('user', mobile);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * modify(mobile) {
      try {
        yield app.mysql.update('user', mobile);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    /*
    * vote(_id) {
      const vote = yield app.mysql.get('user', {
        where: { id: _id },
        columns: 'vote',
      });
      if (vote < a) {
        try {
          yield app.mysql.update('user', {
            vote: vote + 1,
          });
        } catch (e) {
          this.ctx.logger.error(e);
          return false;
        }
        return vote;
      }
    }*/


  }
  return Project;
};
