/**
 * 2017-9-17  Tong Yuehong
 */

var a = function fun(){
    return function(x,y){
        return  x+y;
    }
}

var b = a();
var c = b(2, 3);
console.log(c);

//比较d，b虽然都等于a（），但不同，在内存中指向两个function（x），修改b并不影响d
var d = a();
b.spec = 1;

console.log(b.spec, d.spec);

// a()即返回下一个函数，（2，3）加入参数，调用a()返回的函数
console.log(a()(2, 3));
