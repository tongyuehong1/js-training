'use strict';
const knex = require('knex')({
  client: 'mysql',
});

module.exports = {
  * unique(app, table, column) {
    const a = knex.schema.alterTable(table, function(t) {
      t.unique(column);

    });
    console.log(a.toString());
    yield app.mysql.query(a.toString());
  },

};
