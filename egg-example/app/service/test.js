/**
 * 2017-09-24    Tong Yuehong
 */
'use strict';

module.exports = app => {
  class Test extends app.Service {
    * test() {
      return 'test.test';
    }
  }
  return Test;
};
