/**
 * 2017-09-24    Tong Yuehong
 */
'use strict';

module.exports = app => {
  class Student extends app.Service {
    * student() {
      return 'Tong Yuehong';
    }
  }
  return Student;
};
