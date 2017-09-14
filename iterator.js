/**
 * 2017-09-14 Tong Yuehong
 */

var arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach(function(e){
    console.log(e + 2);
});

console.log(arr.map(function(e){
    return 3 * e;
}));

console.log(arr.filter(function(e){
    return e <= 8;
}));

console.log(arr.reduce(function(a, b){
    return a - b;
}));

console.log(arr.every(function(i){
    return i > 9;
}));

console.log(arr.some(function(i){
    return i > 2;
}))
