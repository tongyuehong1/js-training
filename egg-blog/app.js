'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const hasHome = yield app.mysql.query(knex.schema.hasTable('home').toString());
    if (hasHome.length === 0) {
      const homeSchema = knex.schema.createTableIfNotExists('home', function(table) {
        table.increments();
        table.string('img').notNullable();
        table.string('title').notNullable();
        table.string('brief').notNullable();
        table.text('essay').notNullable();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(homeSchema.toString());
    }
    const hasEssay = yield app.mysql.query(knex.schema.hasTable('essay').toString());
    if (hasEssay.length === 0) {
      const essaySchema = knex.schema.createTableIfNotExists('essay', function(table) {
        table.increments();
        table.string('title').notNullable();
        table.string('brief').notNullable();
        table.string('type').notNullable();
        table.text('essay').notNullable();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(essaySchema.toString());
    }
  });
};
