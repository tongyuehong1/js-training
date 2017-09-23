/**
 * 2017-09-23  Tong Yuehong
 */

function asyncFunction() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('A sync Hello world');
    }, 1000);
  });
}     
// 这个函数并不确定什么时候执行，本身是有延迟的，可能是10ms，肉眼无法感知，但是系统可以体现出来，比如还是会先输出下面的
// 与普通回调函数不同，不是一个一个event注册的，是同时注册了全部的event
// 即使在某一个then中加入延时函数，延时函数在整个promi链执行结束后才能执行；     
asyncFunction().then(function (value) {
  console.log(`1-${value}`);
  return 'aaaa';
}).then(function (value) {
  console.log(`2-${value}`);
  return {
    value: value,
    age: 2
  }
}).then(function (v) {
  console.log(`3-${v.value} - ${v.age}`);
  console.log(a);
}).catch(function (error) {
  console.log(`catch-${error}`);
  return 'hello';
}).then(function (v) {
  console.log(`4-${v}`);
})

console.log('asdfg');
