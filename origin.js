/**
 * 2017-09-17  Tong Yuehong
 */

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
