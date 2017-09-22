/**
 * 2017-09-22     Tong Yuehong
 */

const bird = require('./bird');
function woodpecker(){

}
woodpecker.prototype.__proto__ = bird.prototype;

module.exports = woodpecker;
