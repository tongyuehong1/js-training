/**
 * 2017-09-19 Tong Yuehong
 */

var person = {
    age : 19
};

person.getage = function(){
    return 0;
}

var a = Object.create(person, {
    age: {
        value : 20
    }  
});

console.log(a.__proto__);
console.log(a.getage());

a.__proto__.name = 1;
console.log(person.name);

var b = Object.create(person, {});
b.__proto__.sex = 3;
console.log(a.sex);

console.log(a.age, b.age);

var m = [1, 2, 3];
var n = 'name';
console.log(typeof m, typeof n)
console.log(m.__proto__, n.__proto__);
console.log(m.__proto__.__proto__ === Object.prototype);
console.log(m.__proto__ === Array.prototype);
console.log(n.__proto__.__proto__ === Object.prototype);
console.log(n.__proto__ === String.prototype);
