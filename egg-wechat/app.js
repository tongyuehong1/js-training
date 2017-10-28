'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();
    const hasMissing = yield app.mysql.query(knex.schema.hasTable('missing').toString());
    if (hasMissing.length === 0) {
      const missingSchema = knex.schema.createTableIfNotExists('missing', function(table) {
        table.increments();
        table.string('wechat').notNullable();
        table.string('date').notNullable();
        table.string('ME').notNullable();
        table.string('TA').notNullable();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(missingSchema.toString());
      yield ctx.helper.unique(app, 'missing', 'wechat');
    }
    const hasPhoto = yield app.mysql.query(knex.schema.hasTable('photo').toString());
    if (hasPhoto.length === 0) {
      const photoSchema = knex.schema.createTableIfNotExists('photo', function(table) {
        table.increments();
        // table.string('wechat').notNullable();
        table.string('img').notNullable();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(photoSchema.toString());
    }
    const hasEssay = yield app.mysql.query(knex.schema.hasTable('essay').toString());
    if (hasEssay.length === 0) {
      const essaySchema = knex.schema.createTableIfNotExists('essay', function(table) {
        table.increments();
        table.text('essay').notNullable();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(essaySchema.toString());
    }
    const hasSend = yield app.mysql.query(knex.schema.hasTable('send').toString());
    if (hasSend.length === 0) {
      const sendSchema = knex.schema.createTableIfNotExists('send', function(table) {
        table.increments();
        table.string('wechat').notNullable();
        table.text('letter').notNullable();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(sendSchema.toString());
    }
  });
};
