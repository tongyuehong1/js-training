'use strict';

module.exports = app => {
  app.post('/two/missinginsert', 'missing.insert');
  app.post('/two/missingselect', 'missing.select');
  app.post('/hearts/list', 'hearts.select');
  app.post('/hearts/write', 'hearts.insert');
  app.post('/strategy', 'strategy.select');
};
