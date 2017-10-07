'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.post('/create', 'study.create');
  app.post('/get', 'study.get');
  app.post('/delete', 'study.delete');
  app.post('/update', 'study.update');
  app.post('/select', 'study.select');
  app.post('/set', 'study.set');
  app.post('/insert', 'training.insert');
};
