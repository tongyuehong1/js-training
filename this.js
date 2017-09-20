/**
 *2017-09-18 Tong Yuehong
 */

/*function add(x) {
    return this.a + x;
}
var a = 1;
var c = add(2);

console.log(c);*/

/*
var obj = {
    a : 1,
    add : function(x) {
        return function () {
            console.log(`this.a -> ${this.a}`)
            return this.a + x;
        }
    }
}

console.log(obj.add(2)());
setTimeout(obj.add(2), 2000);
*/

var obj = {
    a : 1,
    add : function(x) {
        this.b = 2;
        this.add = undefined;// cs：ip直接指向代码段，执行代码第一次时this.a还存在，然后再次执行时add指向undefind，所以没有会显示出错
        return this.a + x;
    }
};

console.log(obj.add(5), obj.b);
console.log(obj.add(5), obj.b);
