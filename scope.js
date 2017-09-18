/**
 * 2017-09-18    Tong Yuehong
 */

console.log('******if********');
if(true) {
    var a = 3;
    // var a = [1, 2, 3];
}
console.log(`a -> ${a}`);

console.log('*******fun1******')
var obj = function(x){
    return x + a;
}
m = 4;
k = 4
console.log(obj(2), `m -> ${m}`, `k -> ${k}`);

console.log('*******fun2*******')
var sub= {
    a : 2,
    s : function(x){
        return this.a - x;
    }
}
console.log(sub.s(1))

console.log('*******for*******')

for(var n = 1; n < 20; n++){
}
console.log(`n -> ${n}`);

console.log('*******while*******')
while(n--){
    var m = 5;
}
console.log(`m - > ${m}`)

console.log('******do shile******');
do{
    var k = 1
}while(m < 2)
console.log(`k -> ${k}`);

var l=function con(){
    var h;
    return function(f){
        return h + f;
    }
}
h = 1;
console.log(h);