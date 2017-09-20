/**
 * 2017-09-20     Tong Yuehong
 */

var a = Object.create(null, {
    name:{
        enumerable: false,
        writable: true,
        configurable: true,
        value: 'tong'
    },
    age:{
        enumerable: true,
        writable: true,
        configurable: true,
        value: 19
    }
})
console.log('*******************(1)*********************')
var b = Object.create(a,{});
console.log(b)
console.log(b.name);

console.log('*********************(2)*********************')
// 因为a的length是继承自他的原型链上某个原型，所以修改length修改的是a最终原型（比如是mm）的length属性，所以所有以mm 为原型的对象的length都发生改变
Object.defineProperty(a, 'length', {
    enumerable:true,
    writable: true,
    configurable: true,
    value: 4
});
console.log(a.length, b.length);

console.log('******************(3)*******************')
Number.prototype.sex = 'male';
var m = 1;
console.log(m.sex)

console.log('*********************(4)freeze************************')
Object.freeze(a);
a.name = 'abc'
console.log(a.name)


console.log('*********************(4)seal************************')
var w = Object.create(null, {
    name:{
        enumerable: true,
        writable: true,
        configurable: true,
        value: 'tong'
    },
    age:{
        enumerable: true,
        writable: true,
        configurable: true,
        value: 19
    }
})
Object.seal(w);
w.age = 20
w.kk = 2;
console.log(w)
