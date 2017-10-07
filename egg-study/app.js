'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();
    const hasNum = yield app.mysql.query(knex.schema.hasTable('num').toString());
    if (hasNum.length === 0) {
      const numSchema = knex.schema.createTableIfNotExists('num', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.tinyint('tinyint').notNullable().defaultTo(0);
        table.boolean('boolean').notNullable().defaultTo(0);
        table.bigInteger('bigInteger').notNullable().defaultTo(0);
        table.decimal('decimal').notNullable().defaultTo(0.0);
        table.date('date').notNullable().defaultTo();
        table.float('float').notNullable().defaultTo();
        table.dateTime('dateTime').notNullable().defaultTo();
        table.time('time').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(numSchema.toString());
      yield ctx.helper.unique(app, 'num', 'name');
    }
    const hasString = yield app.mysql.query(knex.schema.hasTable('string').toString());
    if (hasString.length === 0) {
      const stringSchema = knex.schema.createTableIfNotExists('string', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.binary('binary').notNullable().defaultTo();
        table.text('text').notNullable().defaultTo('');
        table.enum('enum').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(stringSchema.toString());
      yield ctx.helper.unique(app, 'string', 'name');
    }
    const hasNumber = yield app.mysql.query(knex.schema.hasTable('number').toString());
    if (hasNumber.length === 0) {
      const numberSchema = knex.schema.createTableIfNotExists('number', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.tinyint('tinyint').notNullable().defaultTo(0);
        table.boolean('boolean').notNullable().defaultTo(0);
        table.bigInteger('bigInteger').notNullable().defaultTo(0);
        table.decimal('decimal').notNullable(0.0);
        table.date('date').notNullable().defaultTo('1000-01-9');
        table.float('float').notNullable().defaultTo(1.2);
        table.dateTime('dateTime').notNullable().defaultTo('1000-01-01 00:00:00.000001');
        table.time('time').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(numberSchema.toString());
    }
  });
};
