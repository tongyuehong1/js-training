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
    * findIndex() {
      const users = [
        { user: 'barney', active: false },
        { user: 'fred', active: false },
        { user: 'pebbles', active: true },
      ];
      return _.findIndex(users, function(o) { return o.user === 'barney'; });
    }
    * countBy() {
      return _.countBy([ 6.1, 4.2, 6.3 ], Math.floor);
    }
    * every() {
      const users = [
        { user: 'barney', age: 36, active: false },
        { user: 'fred', age: 40, active: false },
      ];
      const e = _.every(users, [ 'active', false ]);
      return ` ${e}  ${_.every([ true, 1, null, 'yes' ], Boolean)} `;
    }
    * filter() {
      const users = [
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false },
      ];
      const f = _.filter(users, function(o) { return !o.active; });
      return `${f} ${_.filter(users, [ 'active', false ])}`;
    }
  }
  return Lodash;
};
