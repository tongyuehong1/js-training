'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();
    ctx.logger.info('some request data');
    ctx.logger.warn('WARNNING!!!!');
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

      const uniqueName = knex.schema.alterTable('student', function(t) {
        t.unique('name');
      });

      yield app.mysql.query(uniqueName.toString());
    }

    const hasTeacher = yield app.mysql.query(knex.schema.hasTable('teacher').toString());
    if (hasTeacher.length === 0) {
      const teaSchema = knex.schema.createTableIfNotExists('teacher', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.string('sex').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(teaSchema.toString());

      const uniqueName = knex.schema.alterTable('teacher', function(t) {
        t.unique('name');
      });
      yield app.mysql.query(uniqueName.toString());
      yield ctx.helper.unique(app, 'user', 'name');
    }
  });
};
