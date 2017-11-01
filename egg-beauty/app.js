'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    // const ctx = app.createAnonymousContext();
    const hasThing = yield app.mysql.query(knex.schema.hasTable('thing').toString());
    if (hasThing.length === 0) {
      const missingSchema = knex.schema.createTableIfNotExists('thing', function(table) {
        table.increments();
        table.string('title').notNullable();
        table.string('price').notNullable();
        table.string('num').notNullable();
        // table.string('TA').notNullable();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(missingSchema.toString());
      // yield ctx.helper.unique(app, 'missing', 'wechat');
    }
  });
};
