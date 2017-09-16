/**
 * 2017-009-16  Tong Yuehong
 */

var o = Object.create(null, {
    foo: {
        enumerable:true,
        waitable: true,
        configurable: true,
        value: 10
    },
    bar: {
        enumerable:false,
        waitable: true,
        configurable: true,
        value: 100
    }
});
console.log(Object.entries(o));
//console.log(o.bar);

console.log(Object.getOwnPropertyNames(o)); 
console.log(Object.keys(o));  //做个比较
console.log(Object.values(o));
