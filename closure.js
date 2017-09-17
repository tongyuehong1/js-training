/**
 * 2017-09-17 Tong Yuehong
 */

var div = function(a){
    return function(b){
        return b/a;
    }
}

console.log(div(2)(1));

var m = div(2);
var n = m(1);
console.log(n);

var m = div(4);
var n = m(1);
console.log(n);
