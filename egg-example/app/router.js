'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/home', 'home.index1');
  app.get('/sina', 'home.sina');
  app.get('/sohu', 'home.sohu');
  app.get('/test', 'home.test');
  app.get('/lodash', 'home.lodash');
  app.get('/con', 'home.home');
  app.get('/stu', 'home.student');
  app.get('/s', 'start.stu');
  app.post('/s', 'start.stu');
  app.post('/date', 'start.date');
};
