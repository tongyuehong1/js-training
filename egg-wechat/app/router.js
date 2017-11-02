'use strict';

module.exports = app => {
  app.post('/two/missinginsert', 'missing.insert');
  app.post('/two/missingselect', 'missing.select');
  app.post('/two/missingupdate', 'missing.update');
  app.post('/two/photoinsert', 'photo.insert');
  app.post('/hearts/list', 'hearts.select');
  app.post('/hearts/send', 'hearts.insert');
  // app.post('/essay/title', 'essay.title');
  // app.post('/essay/img', 'essay.img');
  app.post('/essay', 'essay.essay');
};
