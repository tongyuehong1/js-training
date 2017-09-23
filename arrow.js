/**
 * 
 */

var a = app => {
  this.age = 'abc';
}
console.log(a.prototype);
/*
var b = new a();
console.log(b);
*/
a();
console.log(a, a.age, this.age);
