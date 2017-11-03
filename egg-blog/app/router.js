'use strict';

module.exports = app => {
  app.post('/home', 'home.select');
  app.post('/essay', 'essay.select');
};
