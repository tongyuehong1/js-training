'use strict';

module.exports = app => {
  app.post('/two/missinginsert', 'missing.insert');
  app.post('/two/missingselect', 'missing.select');
};
