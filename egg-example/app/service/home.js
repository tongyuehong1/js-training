/**
 * 2017-09-24     Tong Yuehong
 */
'use strict';

module.exports = app => {
  class Home extends app.Service {
    * find() {
      return 'qq';
    }
    * sina() {
      return yield app.curl('http://www.sina.com.cn');
    }
    * sohu() {
      return yield app.curl('http://www.sohu.com.cn');
    }
    * test() {
      return 'home.test';
    }
  }
  return Home;
};
