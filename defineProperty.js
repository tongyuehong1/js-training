/**
 * 2017-09-16       Tong Yuehong
 */

var o = Object.create(null, {
    foo: {
        enumerable:true,
        waitable: true,
        configurable: true,
        value: 10
    },
    bar: {
        enumerable:true,
        waitable: true,
        configurable: true,
        value: 100
    }
});

var fd = {};

var n = Object.defineProperty(o, 'aa', {
    enumerable:true,
    writable: true,
    configurable: true,
    value: 100000
});
o.aa = 10;
console.log(n, o);

var s = Object.defineProperty(o, 'foo', {
    enumerable:true,
    writable: true,
    configurable: true,
    value: 1
})
console.log(s, o);

var arr = [1, 2];

Object.defineProperty(arr, '4', {
    enumerable:true,
    writable: true,
    configurable: true,
    value: 128
} )
console.log(arr);

Object.defineProperty(arr, 'length', {
    enumerable:true,
    writable: true,
    configurable: true,
    value: 4
} )
console.log(arr);

// 不是所有的属性都可修改
Object.defineProperty(arr, 'length', {
    enumerable:true,
    writable: true,
    configurable: true,
    value: 6
} )
console.log(arr);
