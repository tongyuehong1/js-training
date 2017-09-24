/**
 * 2017-09-24   Tong Yuehong
 */
'use strict';
const _ = require('lodash');
module.exports = app => {
  class Lodash extends app.Service {
    * chunk() {
      const r = [ 1, 2, 3, 4, 5 ];
      return _.chunk(r, 2);
    }
    * compact() {
      const k = [ 1, 2, 3, 4, 5, 0, false ];
      return _.compact(k);
    }
  }
  return Lodash;
};
