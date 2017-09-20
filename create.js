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

console.log('********************Arr**********************')
var m = [1, 2, 3];
console.log(typeof m);
console.log(m.__proto__);
console.log(m.__proto__ === Object.prototype)
console.log(m.__proto__.__proto__ === Object.prototype);
console.log(m.__proto__ === Array.prototype);
console.log(Array.__proto__ === Function.prototype);

console.log('******************String***********************')
var n = 'name';
console.log(typeof n);
console.log(n.__proto__);
console.log(n.__proto__=== Object.prototype);
console.log(n.__proto__.__proto__ === Object.prototype);
console.log(n.__proto__ === String.prototype);
console.log(String.__proto__ === Function.prototype);

console.log('******************Num***********************')
var s = 1;
console.log(typeof s);
console.log(s.__proto__ === Object.prototype);
console.log(s.__proto__.__proto__ === Object.prototype);
console.log(s.__proto__ === Number.prototype);
console.log(Number.__proto__ === Function.prototype);

console.log('******************Boolean***********************')
var k = true;
console.log(typeof k);
console.log(k.__proto__ === Object.prototype);
console.log(k.__proto__.__proto__ === Object.prototype);
console.log(k.__proto__ === Boolean.prototype)
console.log(Boolean.__proto__ === Function.prototype);


console.log('**********************constructor**************************')
console.log(`Function.prototype.constructor === Function -> ${Function.prototype.constructor  === Function}`);
console.log(`Object.prototype.constructor === Object-> ${Object.prototype.constructor  === Object}`);
console.log(`Array.prototype.constructor ===Array -> ${Array.prototype.constructor  === Array}`);
console.log(`Boolean.prototype.constructor === Boolean -> ${Boolean.prototype.constructor === Boolean}`);
console.log(`String.prototype.constructor === String-> ${String.prototype.constructor === String}`);
console.log(`Number.prototype.constructor === Number-> ${Number.prototype.constructor === Number}`)
