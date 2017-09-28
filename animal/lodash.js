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
console.log(objects);  // 没有改变数组，与下面的pull等系列作比较

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
console.log(_.pull(['a', 'b', 'c', 'a', 'b', 'c'], 'b', 'a'));
console.log(_.pullAll(['a', 'b', 'c', 'a', 'b', 'c'], ['a', 'c']));

console.log('******************************pullAllBy**********************************');
var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'y': 1 },{'y': 4}];
//console.log(_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 },{'y': 4}], 'x')); // 执行之后已经改变了array，如果不注释，下一条指令只输出空数组
console.log(_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 },{'y': 4}], 'y'));

console.log('******************************pullAllWith**********************************');
// 与differenceWith不同的是 这个改变了数组，   pullBy与differenceBy也是这个区别。
var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
_.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
console.log(array); // 输出的array已经改变

console.log('******************************pullAt**********************************');
console.log(_.pullAt([1, 2, 3, 4, 6],[1, 4]))

console.log('******************************remove**********************************');// 返回被移除的值构成的数组
var s = [1, 2, 3, 4, 5, 6];
console.log(_.remove(s, function(m){return m % 3 == 0}));
console.log(s);  // 原本的数组也已发生改变

console.log('******************************reverse**********************************');
console.log(_.reverse([1, 3, 2]))

console.log('******************************slice**********************************');// 前闭后开
console.log(_.slice([1, 2, 3, 4, 5 ,6], 1, 3));

console.log('******************************sortedIndex**********************************');
console.log(_.sortedIndex([1, 2], 3));
console.log(_.sortedIndex([1, 2], -1));

console.log('**************************sortedIndexBy***********************************');
var objects = [{'y': 3}, { 'x': 4 }, { 'x': 5 },{'y': 5}];
console.log(_.sortedIndexBy(objects, { 'y': 4 }, function(o) { return o.y; }));
console.log(_.sortedIndexBy(objects, { 'x': 6 }, function(o) { return o.x; }));
console.log(_.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; })); // 与sortedLastIndexBy结果比较


console.log('**************************sortedIndexOf***********************************');// 注意二分查找时查找的是大于还是小于（这个是小于）；
console.log(_.sortedIndexOf([4, 5, 5, 5, 6], 5));
console.log(_.sortedIndexOf([3, 4, 5, 6, 7, 8, 9], 4));

console.log('******************************sortedLastIndex*******************************************');
console.log(_.sortedLastIndex([4, 5, 5, 6], 5));

console.log('*****************************sortedLastIndexOf****************************************');
console.log(_.sortedLastIndexOf([1, 2, 3, 4, 5, 6], 2));

console.log('*********************************sortedLastIndexBy*******************************************');
console.log(_.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }));

console.log('*********************************sortedLastIndexBy*******************************************');
console.log(_.sortedLastIndexOf([4, 5, 5, 5, 6], 5));

console.log('***************************tail**********************************');
console.log(_.tail([2, 3, 4, 5]));

console.log('***************************take**********************************');
console.log(_.take([1, 2, 3, 4, 5], 4));

console.log('***************************takeRight********************************');
console.log(_.takeRight([1, 2, 3, 4, 5], 3));

console.log('***************************takeRightWhile********************************');
var u = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
console.log(_.takeRightWhile(u, function(o) { return !o.active; }));
console.log(_.takeRightWhile(u, ['active', false]));

console.log('***************************takeWhile********************************');
console.log(_.takeWhile(users, function(o) { return o.active; }));

console.log('***************************union********************************');
console.log(_.union([2, 1, 3], [1, 2, 4, 5]));

console.log('***************************unionBy********************************');
console.log(_.unionBy([2.1], [1.2, 2.3], Math.floor));

console.log('***************************unionWith********************************');
var objects = [{ 'x': 1, 'y': 3 }, { 'x': 1, 'y': 4 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
console.log(_.unionWith(objects, others, _.isEqual));

console.log('***************************uniq********************************');
console.log(_.uniq([2, 1, 3, 2, 3, 5]));

console.log('***************************uniqBy********************************');
console.log(_.uniqBy([1.2, 2.1, 1.3], Math.floor));

console.log('***************************uniqWith********************************');
var obje = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
console.log(_.uniqWith(obje, _.isEqual));

console.log('**************************unzip,,,zip*********************************');
var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
console.log(zipped);
console.log(_.unzip(zipped));

console.log('**************************unzipwith*********************************');
var zipped = _.zip([1, 2], [10, 20], [100, 200]);
console.log(_.unzipWith(zipped, _.add));

console.log('**************************xor*********************************');
console.log(_.xor([2, 1, 3], [2, 3, 4]));

console.log('**************************zipObject*********************************');
console.log(_.zipObject(['a', 'b'], [1, 2])); // 前面是属性标识符，后面是对应值

console.log('**************************zipObjectDeep*********************************');
console.log(_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]));

console.log('**************************zipWith*********************************');
console.log(_.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
  return a + b + c;
}));

console.log('********collection************');
console.log(_.countBy([6.1, 4.2, 6.3], Math.floor));
console.log(_.countBy(['one', 'two', 'three'], 'length'));

console.log('*******************flatMapDepth*********************************');
function duplicate(n) {
  return [[[n, n]]];
} 
console.log(_.flatMapDepth([1, 2], duplicate, 1));
console.log(_.flatMapDepth([1, 2], duplicate, 2));
console.log('**********************includes*****************************');
console.log(_.includes({ 'a': 1, 'b': 2 }, 1));
console.log(_.includes([1, 2, 3],(1, 2)));
console.log(_.includes([1, 2, 3],1, 2));
