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
