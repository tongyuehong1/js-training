'use strict';

module.exports = app => {
  app.post('/essay', 'essay.essay');
  app.post('/user', 'user.insert');
  app.post('/userselect', 'user.select');

  app.post('/two/missinginsert', 'missing.insert');
  app.post('/two/missingselect', 'missing.select');
  app.post('/two/missingupdate', 'missing.update');

  app.post('/two/photoinsert', 'photo.insert');
  app.post('/two/photoselect', 'photo.select');

  app.post('/hearts/list', 'hearts.select');
  app.post('/hearts/send', 'hearts.insert');
  app.post('/hearts/selectanother', 'hearts.selectanother');
  app.post('/hearts/anotherlist', 'hearts.anotherlist');
  app.post('/hearts/delete', 'hearts.delete');

  app.post('/memory/insert', 'memory.insert');
  app.post('/memory/select', 'memory.select');

  app.post('/temporaryinsert', 'temporary.insert');
  app.post('/temporaryselect', 'temporary.select');
};
