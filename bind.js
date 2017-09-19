/**
 * 2017-09-18 Tong Yuehong
 */

var a = {
    b : 2
}
function add() {
    return this.age = 10
}
console.log(add.apply(a),a);

var m = add.bind(a);
console.log(m(), a);

console.log(add.call(a),a);

function sub(x) {
    this.age = 2;
    return this.age + x
}
console.log(sub.apply(a, [10]), a);

var k = sub.bind(a,10);
console.log(k(), a);

console.log(sub.call(a,10), a)
