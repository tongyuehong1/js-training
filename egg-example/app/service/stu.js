/**
 * 2017-09-24    Tong Yuehong
 */
'use strict';

module.exports = app => {
  class Student extends app.Service {
    * stu() {
      return 'Tong Yuehong11111';
    }
  }
  return Student;
};
