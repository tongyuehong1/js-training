/**
 * 2017-09-22     Tong Yuehong
 */

const bird = require('./bird');
function sparrow(){

}
sparrow.prototype.__proto__ = bird.prototype;

module.exports = sparrow;
