'use strict';

module.exports = app => {
  app.post('/essay', 'essay.essay');
  app.post('/two/missinginsert', 'missing.insert');
  app.post('/two/missingselect', 'missing.select');
  app.post('/two/missingupdate', 'missing.update');
  app.post('/two/photoinsert', 'photo.insert');
  app.post('/hearts/list', 'hearts.select');
  app.post('/hearts/send', 'hearts.insert');
  app.post('/hearts/selectanother', 'hearts.selectanother');
  app.post('/hearts/anotherlist', 'hearts.anotherlist');
  // app.post('/hearts/anotherlist', 'hearts.delete');
};
