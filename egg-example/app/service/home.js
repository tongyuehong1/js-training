'use strict';

module.exports = app => {
  class Home extends app.Service {
    * find() {
      return 'qq';
    }
  }
  return Home;
};
