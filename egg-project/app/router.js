'use strict';

module.exports = app => {
  app.post('/user/register', 'user.register');
  app.post('/user/login', 'user.login');
  app.post('/mobile/set', 'mobile.set');
  app.post('/mobile/modify', 'mobile.modify');


  app.post('/production/upload', 'production.upload');
  app.post('/production/list', 'production.list');
  app.post('/production/vote', 'procduction.vote');
};
