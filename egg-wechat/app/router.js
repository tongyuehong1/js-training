'use strict';

module.exports = app => {
  app.post('/two/missinginsert', 'missing.insert');
  app.post('/two/missingselect', 'missing.select');
  app.post('/two/missingupdate', 'missing.update');
  app.post('/two/photoinsert', 'photo.insert');
  app.post('/hearts/list', 'hearts.select');
  app.post('/hearts/send', 'hearts.insert');
  app.post('/essayfirst', 'essay.first');
  app.post('/essaysecond', 'essay.second');
  app.post('/essaythird', 'essay.third');
};
