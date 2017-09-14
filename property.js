/**
 * 2017-09-14   Tong Yuehong
 */

 var person = {
     name: 'hello',
     age: 20,
     city: 'hangzhou'
 };
 for (var key in person) {
     console.log(`key = ${key}, value = ${person[key]}`);
 }
