/**
 * 2017-09-15     Tong Yuehong
 */

var arr = [1, 2, 3, 4, 5, 'a', 'b', 'c'];

function compare(content){
    for(n = 0;n < arr.length;n++){
        if(content === arr[n]){
            console.log('exit');
        }
    }
}

compare('a');

function open(content){
    var index = -1;
    index = arr.indexOf(content)
    if(index >= 0){
        console.log('exit');
    }else{
        console.log('not exit');
        console.log(arr.push(content));
        console.log(arr);
    }
}

open(1);
open(8);
