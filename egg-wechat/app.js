'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const hasMissing = yield app.mysql.query(knex.schema.hasTable('missing').toString());
    if (hasMissing.length === 0) {
      const missingSchema = knex.schema.createTableIfNotExists('missing', function(table) {
        table.increments();
        table.string('wechat').notNullable();
        table.string('date').notNullable();
        table.string('female').notNullable();
        table.string('male').notNullable();
        // table.integer('age').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(missingSchema.toString());
    }
    const hasLetters = yield app.mysql.query(knex.schema.hasTable('letters').toString());
    if (hasLetters.length === 0) {
      const lettersSchema = knex.schema.createTableIfNotExists('letters', function(table) {
        table.increments();
        table.string('wechat').notNullable();
        table.text('letters').notNullable();
        // table.string('female').notNullable();
        // table.string('male').notNullable();
        // table.integer('age').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(lettersSchema.toString());
    }
    const hasStrategy = yield app.mysql.query(knex.schema.hasTable('strategy').toString());
    if (hasStrategy.length === 0) {
      const strategySchema = knex.schema.createTableIfNotExists('strategy', function(table) {
        table.increments();
        // table.string('wechat').notNullable();
        table.text('strategy').notNullable();
        // table.string('female').notNullable();
        // table.string('male').notNullable();
        // table.integer('age').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(strategySchema.toString());
    }
  });
};
