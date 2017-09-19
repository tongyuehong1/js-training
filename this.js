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
        this.add = undefined;
        return this.a + x;
    }
};

console.log(obj.add(5), obj.b);
console.log(obj.add(5), obj.b);
