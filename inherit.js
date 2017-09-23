/**
 * 2017-09-22 Tong Yuehong
 */

/*
function anmial(){
}
anmial.prototype.species = 'mammal';

function cat(name){
    anmial.apply(this,arguments);
    this.name = name;
}

var c = new cat('a');
console.log(c);

cat.species = 'bird';
console.log(anmial.prototype.species);
*/

console.log('*******************black****************************');// 不够完善，例子如下
function animal(){

}
function cat(){

}
function dog(){

}
cat.prototype = animal.prototype;
cat.prototype.constructor = cat;
dog.prototype = animal.prototype;
dog.prototype.constructor = dog;
cat.prototype.food = 'milk';
var m = new dog();
console.log(m.food);

console.log('************************(2)直接继承 prototype***************************');
function Animal() {
    this.species = 'animal';
}
function Cat(name,color) {
    Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}
var k = new Cat('k','yello');
console.log(k);

console.log('************************(3)prototype 模式***************************');
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

console.log('************************(4)利用空对象***************************');
var F = function(){};
F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;

console.log('************************(5)拷贝继承***************************');
function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
      c[i] = p[i];
    }
    c.uber = p;
}

console.log('****************************object方法********************************');
function object(o) {
    function F() {}
  
    F.prototype = o;
    return new F();
  }
  
console.log('******************浅拷贝******************');// 拷贝了p的内容，指针指向地址与p指向地址为同一个内存小格
function extendCopy(p) {
    var c = {};
  
    for (var i in p) {
      c[i] = p[i];
    }
  
    c.uber = p;
    return c;
}

console.log('*******************深拷贝*********************');//拷贝时拷贝了内容，同时指向了一个新的内存小格，互不影响
function deepCopy(p, c) {
    var c = c || {};
  
    for (var i in p) {
      if (typeof p[i] === 'object') {
        c[i] = (p[i].constructor === Array) ? [] : {};
        deepCopy(p[i], c[i]);
      } else {
        c[i] = p[i];
      }
    }
    return c;
  }
