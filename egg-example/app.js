'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const hasUser = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }

    const hasStudent = yield app.mysql.query(knex.schema.hasTable('student').toString());
    if (hasStudent.length === 0) {
      const stuSchema = knex.schema.createTableIfNotExists('student', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('num').notNullable().defaultTo(0);
        table.integer('sno').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(stuSchema.toString());
    }
  });
};
