'use strict';

module.exports = app => {
  class Training extends app.Service {
    * insert(param) {
      try {
        yield app.mysql.insert('num', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Training;
};
