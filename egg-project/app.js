'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();
    const hasUser = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        table.integer('wechat').notNullable();
        table.string('mobile').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.integer('vote').notNullable();
        table.string('type').notNullable().defaultTo('');
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, 'user', [ 'mobile', 'wechat' ]);
    }
    const hasProduction = yield app.mysql.query(knex.schema.hasTable('production').toString());
    if (hasProduction.length === 0) {
      const productionSchema = knex.schema.createTableIfNotExists('production', function(table) {
        table.increments();
        table.integer('userid').notNullable().defaultTo(0);
        table.string('url').notNullable().defaultTo('');
        table.string('status').notNullable().defaultTo('');
        table.string('model').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.integer('poll').notNullable().defaultTo(0);
        table.charset('utf8');
      });

      yield app.mysql.query(productionSchema.toString());
      yield ctx.helper.unique(app, 'production', 'userid');
    }
  });
};
