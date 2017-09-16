/**
 * 2017-09-16  Tong Yuehong
 */

var o = Object.create(null, {
    foo: {
        enumerable: true,
        waitable: true,
        configurable: true,
        value: 'hello'
    },
    bar: {
        enumerable: false,
        waitable: true,
        configurable: true,
        value: 'world'
    }
});

var fd ={};
var obj = Object.assign(fd,o);
console.log(o, obj);
console.log(o.bar, obj.bar);
