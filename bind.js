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

// 带参数的
function sub(x) {
    this.age = 2;
    return this.age + x
}
console.log(sub.apply(a, [10]), a); // apply第二个参数是数组，这是和call唯一的区别

var k = sub.bind(a,10); // bind返回了一个新的函数
console.log(k(), a);

console.log(sub.call(a,10), a)
