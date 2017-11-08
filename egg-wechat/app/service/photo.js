'use strict';

module.exports = app => {
  class Photo extends app.Service {
    * insert(things) {
      try {
        const image = things.img;
        const _wechat = things.wechat;
        for (let i = 0; i < image.length; i++) {
          yield app.mysql.insert('photo', {
            wechat: _wechat,
            img: image[i],
          });
        }
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select(_wechat) {
      let res;
      try {
        res = yield app.mysql.select('photo', {
          where: { wechat: _wechat.wechat },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Photo;
};
