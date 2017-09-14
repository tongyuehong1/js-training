/**
 * 2017-09-14 Tong Yuehong
 */

var x = 0;

for(var i = 0; i < 10001; i++){
    if(i % 3 == 0){
    x = x + i;
    }
}

console.log(x);

// 斐波那契数列
var a = [1, 1];
for(var n = 2;n < 41; n++){
    a[n] = a[n - 1] + a[n - 2];
}
console.log(a);

var b = [1, 1];
for(var n = 2;n < 31; n++){
    b[n] = b[n - 1] + 2 * b[n - 2];
}
console.log(b);
