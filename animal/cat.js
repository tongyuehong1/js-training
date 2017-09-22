/**
 * 2017-09-22     Tong Yuehong
 */

const mammal = require('./mammal');

function cat(){

}
cat.prototype.__proto__ = mammal.prototype;

module.exports = cat;
