'use strict';

module.exports = app => {
  app.post('/two/missing', 'home.index');
};
