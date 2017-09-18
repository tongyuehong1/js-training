/**
 * 2017-09-18   Tong Yuehong
 */

console.log('\t1\t2\t3\t4\t5\t6\t7\t8\t9\t')

for(var i = 1;i < 10; i++) {
    var line = '';
    for(var j = 1;j <= i; j++){
        line = line + `${i * j}\t`; 
    }
    line = `${i}\t` + line;
    console.log(line);
}

console.log('\t1\t2\t3\t4\t5\t6\t7\t8\t9\t')
for(var i = 1;i < 10; i++) {
    var arr = [];
    for(var j = 1;j <=i; j++){
        arr.push(i * j);
    }
    arr = `${i}\t` + arr;
    console.log(arr.toString());
}
