'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/home', 'home.index1');
  app.get('/sina', 'home.sina');
  app.get('/sohu', 'home.sohu');
  app.get('/test', 'home.test');
  app.get('/lodash', 'home.lodash');
  app.get('/con', 'home.home');
  app.get('/s', 'start.stu');
  app.post('/s', 'start.stu');
  app.post('/date', 'start.date');
  app.get('/countBy', 'lodash.countBy');
  app.get('/every', 'lodash.every');
  app.get('/filter', 'lodash.filter');
  app.post('/create', 'test.create');
  app.post('/get', 'test.get');
  app.post('/delete', 'test.delete');
  app.post('/update', 'test.update');
  app.post('/select', 'test.select');
  app.post('/create1', 'student.create');
  app.post('/get1', 'student.get');
  app.post('/delete1', 'student.delete');
  app.post('/update1', 'student.update');
  app.post('/set', 'test.set');
};