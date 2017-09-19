/**
 * 2017-09-17 Tong Yuehong
 */

var str = 'hello,  world';
//var str = '';

console.log('*********charAt****************');

console.log(`The character at index 0 is ${str.charAt(0)}`);
console.log(`The character at index -2 is ${str.charAt(-2)}`);
console.log(`The character at index 20 is ${str.charAt(20)}`);
console.log(`The character at index 5 is ${str.charAt(5)}`);

console.log('*********concat****************');// 拼接
console.log(str.concat(', welcome'));
console.log(str.concat(',aaa', ',bbb'))

console.log('************includes*************');// 返回值是true或false
console.log(str.includes('hello'));
console.log(str.includes('hello', 2)); // 后面的数字为从第几个字符开始寻找
console.log(str.includes('hello', 20));
console.log(str.includes('hello', -1));// 负数时，默认从0开始
console.log(str.includes('', 1));// 空字符串始终为true
console.log(str.includes('', 20));
console.log(str.includes('', -20));

console.log('***********endsWith**************');  
console.log(str.endsWith('world'));
console.log(str.endsWith('hello'));
console.log(str.endsWith('o', 5));// 数字是指前5个
console.log(str.endsWith('hello', -5));
console.log(str.endsWith('world', 20));
console.log(str.endsWith(''));
console.log(str.endsWith('', -1));
console.log(str.endsWith('', 3));
console.log(str.endsWith('',20));

console.log('*********indexOf****************');// 查询所写内容在字符串中在第一次在第几位出现，返回值为数字
console.log(str.indexOf('world'));
console.log(str.indexOf('off'));// 如果不包含，则返回-1；
console.log(str.indexOf('world', 9));//数字为从第几位开始找
console.log(str.indexOf('world', 4));
console.log(str.indexOf('world', -1));//即从0开始
console.log(str.indexOf('w', -1));
console.log(str.indexOf(''));
console.log(str.indexOf('', 20));

console.log('*********lastIndexOf****************');
console.log(str.lastIndexOf('l'));
console.log(str.lastIndexOf('m'));
console.log(str.lastIndexOf('l', 4));
console.log(str.lastIndexOf('l', -1));
console.log(str.lastIndexOf('l', 20));
console.log(str.lastIndexOf('', 20));
console.log(str.lastIndexOf('', 5));
console.log(str.lastIndexOf('', 0));

console.log('*********padEnd****************');
console.log(str.padEnd(20));
console.log(str.padEnd(20, 'abc'));
console.log(str.padEnd(1));
console.log(str.padEnd(15, 'abcdefghijkl'));
console.log(str.padEnd(-2, 'aaa'));

console.log('*********StartEnd****************');
console.log(str.padStart(20));
console.log(str.padStart(20, 'abc'));
console.log(str.padStart(-1));
console.log(str.padStart(2));

console.log('*********repeat****************');
//console.log(str.repeat(-1));
console.log(str.repeat(0));
console.log(str.repeat(2));
console.log(str.repeat(2.5));

console.log('***********replace**************');
console.log(str.replace('hello','welcome'))

console.log('************slice*************');
console.log(str.slice(0, 3));
console.log(str.slice(-1, 3));
console.log(str.slice(-1, 20));
console.log(str.slice(5, 1));
console.log(str.slice(-6, -1));

console.log('************split*************');
console.log(str.split(' ', 0));
console.log(str.split(' ', 5));
console.log(str.split(' ', -1));
console.log(str.split('o', 2));

console.log('************startsWith*************');
console.log(str.startsWith('h'));
console.log(str.startsWith('h', 3));
console.log(str.startsWith('h', -1));
console.log(str.startsWith('e', 1));

console.log('************substr*************');
console.log(str.substr(5, 7));
console.log(str.substr(-1, 2)); // 倒数第一个往后数两个  只剩倒数第一个这一个数，所以只输出d

console.log('************trim*************');
console.log(str.trim());

console.log('************trimLeft*************');
console.log(str.trimLeft());

console.log('************trimRight*************');
console.log(str.trimRight());
console.log(str.length);
console.log(str.trimRight().length);
