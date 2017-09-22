/**
 * 2017-09-22     Tong Yuehong
 */

const mammal = require('./mammal');

function dog(){

}
dog.prototype.__proto__ = mammal.prototype;
module.exports = dog;
