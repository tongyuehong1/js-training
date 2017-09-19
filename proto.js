/**
 * 2017-09-19       Tong Yuehong
 */

console.log('*******************************');
console.log(`typeof Function -> ${typeof Function}`);
console.log(`typeof Object -> ${typeof Object}`);
console.log(`typeof Function.protoytype -> ${typeof Function.prototype}`);
console.log(`typeof Object.protoytype -> ${typeof Object.prototype}`);
console.log(`Function.prototype === Object.prototype -> ${Function.prototype === Object.prototype}`);
console.log(`Function.__proto__ === Object.prototype -> ${Function.__proto__ === Object.prototype}`);
console.log(`Function.prototype === Object.__proto__ -> ${Function.prototype === Object.__proto__}`);
console.log(`Function.proto === Object.__proto__ ->${Function.__proto__ === Object.__proto__}`);
console.log(`Function.__proto__ === Object.__proto__ -> ${Function.__proto__ === Object.__proto__}`);

console.log(`Function.prototype.__proto__ === Object.prototype.proto -> ${Function.prototype.__proto__ === Object.prototype.__proto__}`);
console.log(`Function.prototype.__proto__ -> ${Function.prototype.__proto__}`);
console.log(`Object.prototype.__proto__ -> ${Object.prototype.__proto__}`);

console.log(`Function.prototype -> ${Function.prototype}` );
console.log(`Object.prototype -> ${Object.prototype}`);

console.log(`Function.__proto__ -> ${Function.__proto__}` );
console.log(`Object.__proto__ -> ${Object.__proto__}`);
console.log(`Object.proto === Function.proto -> ${Object.proto === Function.proto}`);

console.log('**************car****************');
function car(){
    
}
console.log(`typeof car -> ${typeof car}`);
console.log(`car.prototype -> ${car.prototype}`);
console.log(`car.__proto__ -> ${car.__proto__}`);
console.log(`car.__proto__.prototype === car.__proto__ -> ${car.__proto__.prototype === car.__proto__}`);
console.log(`car.__proto__.prototype -> ${car.__proto__.prototype}`);
console.log(`car.__proto__.proto === Object.prototype -> ${car.__proto__.__proto__ === Object.prototype}`);
console.log(`car.__proto__.__proto__ -> ${car.__proto__.__proto__}`);
