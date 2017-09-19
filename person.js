/**
 * 2017-09-19      Tong Yuehong
 */

/*var person = function (age) {
    this.age = age;
};*/

function person(age){
    this.age = age;
}

var tong = new person(20); // 是普通对象
var ss = new person(10);

person.prototype.getAge = function(){
    return this.age;
}
console.log(tong.getAge(), ss.getAge());

tong.get = function(){
    return 1;
}
ss.son = function(){
    return 6;
}
// console.log(tong.son());
console.log(typeof tong.get.prototype)
console.log(person.__proto__ === Function.prototype)
console.log(tong.get.__proto__ === Function.prototype)
console.log(ss.son.__proto__ === Function.prototype)

// tong.__proto__ = null;
// console.log(tong.getAge());
tong.getAge = function(){
    return this.age + 1;
}
console.log(tong.getAge());

Object.prototype.tong = function(){
    console.log(1);
}
tong.tong();

var con = new tong.get();
tong.get.prototype.sex = function(){
    return 0;
}
console.log(con.sex());
