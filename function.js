/**
 * 2017-09-16 Tong Yuehong
 */

var a = function(){
};
a.one = [1, 2];
a.two = {
    name: 'abc',
    sex: 'male',
}
a.three = function(){
    console.log('hello')
}
console.log(Object.getOwnPropertyNames(a)); 


Object.defineProperty(a, 'len',{
    enumerable: true,
    configurable: true,
    get: function() { return this.one.length; },
});

console.log(a.len);

a.one.length= 10;

console.log(a.len);
