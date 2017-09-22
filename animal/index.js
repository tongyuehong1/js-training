/**
 * 2017-09-22     Tong Yuehong
 */

const cat = require('./cat');
const dog = require('./dog');
const sparrow = require('./sparrow');
const woodpecker = require('./woodpecker');

var c = new cat();
c.eat();

var d = new dog();
d.eat();
d.birth();

var a = new sparrow();
a.can();

var b = new woodpecker();
b.can();

