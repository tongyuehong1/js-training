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
        table.string('wechat').notNullable();
        table.string('img').notNullable();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(photoSchema.toString());
    }
    const hasShowessay = yield app.mysql.query(knex.schema.hasTable('showessay').toString());
    if (hasShowessay.length === 0) {
      const showessaySchema = knex.schema.createTableIfNotExists('showessay', function(table) {
        table.increments();
        table.string('pic').notNullable();
        table.text('title').notNullable();
        table.text('brief').notNullable();
        table.text('essay').notNullable();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(showessaySchema.toString());
    }
    const hasWrite = yield app.mysql.query(knex.schema.hasTable('write').toString());
    if (hasWrite.length === 0) {
      const writeSchema = knex.schema.createTableIfNotExists('write', function(table) {
        table.increments();
        table.string('wechat').notNullable();
        table.string('img');
        table.string('title').notNullable();
        table.text('letter').notNullable();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(writeSchema.toString());
    }
    const hasUser = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        table.string('wechat').notNullable();
        table.string('anthor').notNullable();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }
    const hasMemory = yield app.mysql.query(knex.schema.hasTable('memory').toString());
    if (hasMemory.length === 0) {
      const memorySchema = knex.schema.createTableIfNotExists('memory', function(table) {
        table.increments();
        table.string('wechat').notNullable();
        table.string('img').notNullable();
        table.string('title').notNullable();
        table.text('essay').notNullable();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(memorySchema.toString());
    }
    const hasTemporary = yield app.mysql.query(knex.schema.hasTable('temporary').toString());
    if (hasTemporary.length === 0) {
      const temporarySchema = knex.schema.createTableIfNotExists('temporary', function(table) {
        table.increments();
        table.string('wechat').notNullable();
        table.string('anthor').notNullable();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(temporarySchema.toString());
    }
  });
};
