'use strict';
const knex = require('knex')({
  client: 'mysql',
});

module.exports = {
  foo(a) {
    return a * 2;
  },
  hel() {
    return 1;
  },
  * unique(app, table, column) {
    console.log('knex: ', knex.schema);
    const a = knex.schema.alterTable(table, function(t) {
      t.unique(column);

    });
    console.log(a.toString());
    yield app.mysql.query(a.toString());
  },

};
