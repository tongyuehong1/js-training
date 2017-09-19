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


var b = 1;
var con = function(){
    var a = {
        age: b++
    };
    return a;
}

console.log(con(), con(), con(), con(), b);



var son = function(a) {
    var origin = 1;

    return function() {
        var obj = {
            age: origin
        };

        origin = origin + a;

        return obj;
    }
}

var fun = son(6);
console.log(fun(), fun(), fun(), fun());
