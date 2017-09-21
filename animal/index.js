/**
 * 2017-09-21   Tong Yuehong
 */

const _ = require('lodash');
var a = _.chunk([1, 2, 3, 4, 5, 6],3);
console.log(a)
console.log(_.compact([0, null, 1, 2]))
console.log(_.difference([1, 2], [2, 3]));

console.log('************************differenceBy******************************');
console.log(_.differenceBy([1.2, 2.1, 3.2], [1.2, 2.2, 4], Math.floor))

console.log('************************differenceWith******************************');
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
console.log(_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual));// 比较的是数的话用difference就可以，比较对象时比较的是他们的引用，例如var m = {}，m即引用

console.log('************************dropRightWhile******************************');
console.log(_.dropRightWhile(users, ['active', true]))
var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];
console.log(_.dropRightWhile(users, ['active', false]));
console.log(_.dropRightWhile(users, ['active', true]));
console.log(_.dropRightWhile(users, function(o){return o.active = false;}));
console.log(_.dropRightWhile(users, 'active')); // 默认为true

console.log('************************dropWhile******************************');
console.log(_.dropWhile(users, ['active', false]));
console.log(_.dropWhile(users, ['active', true]));
console.log(_.dropWhile(users, 'active'));


console.log('************************fill*****************************');
var m = [1, 2, 3, 4, 5, 6];
console.log(_.fill(m, 'a', 0, 5));
console.log(_.fill(m, 'a', -4, 5));
console.log(_.fill(Array(4)));
console.log(_.fill(Array(4),'*'))

console.log('************************findIndex***********************************');// 第一个相同的元素的索引,没有这个元素就返回-1
console.log(_.findIndex(users,'c'));
console.log(_.findIndex(users,'create'));
console.log(_.findIndex(users,['active', false]));
console.log(_.findIndex(users,'active'));

console.log('***************************findLastIndex******************************');
console.log(_.findLastIndex(users,['active', false]));
console.log(_.findLastIndex(users,['create']));

console.log('************************flatten*****************************');
var n = [1, 2, [3, [4]], [5, 6], 7];
console.log(_.flatten(n));

console.log('***************************flattenDeep************************************');
console.log(_.flattenDeep(n));

console.log('***************************flattenDepth************************************');
console.log(_.flattenDepth(n, 1));
console.log(_.flattenDepth(n, 2));

console.log('***************************fromPairs************************************');
console.log(_.fromPairs([['a', 1], ['b', 2], ['c', 3]]));
console.log(_.fromPairs([['a', 1], ['b', 2]]));

console.log('*******************************head**********************************');
console.log(_.head([1, 2, 3]));

console.log('*******************************indexOf**********************************');
console.log(_.indexOf([1, 2, 3, 4, 5], 6));
console.log(_.indexOf([1, 2, 3, 4, 5], 3, 5)); // 返回-1
console.log(_.indexOf([1, 2, 5, 4, 5, 3], 5, 3));

console.log('*******************************initial**********************************');
console.log(_.initial([1, 2, 3, 4, 5]));

console.log('*******************************intersection**********************************');
console.log(_.intersection([1, 2, 3, 4],[1, 3, 5, 6], [1]));

console.log('*******************************intersectionBy**********************************');
console.log(_.intersectionBy([1.1, 2.1, 3.1], [2.1, 4.1], Math.floor));

console.log('*******************************intersectionWith**********************************');
console.log(_.intersectionWith([1, 2, 3], [1, 2, 4], _.isEqual))

console.log('*******************************join**********************************');
console.log(_.join(['a', 'b', 'c'],'@'));

console.log('******************************last**********************************');
console.log(_.last([1, 2, 3]));

console.log('******************************lastIndexOf**********************************');
console.log(_.lastIndexOf([1, 2, 3, 4, 2], 2));
console.log(_.lastIndexOf([1, 2, 3, 4, 2], 4, 2)); // 没有即返回-1
console.log(_.lastIndexOf([1, 2, 3, 4, 2], 3, 2));
console.log(_.lastIndexOf([1, 2, 3, 4, 2], 2, 6));

console.log('******************************nth**********************************');
console.log(_.nth([1, 2, 3, 4, 5], 3));

console.log('******************************pull**********************************');
