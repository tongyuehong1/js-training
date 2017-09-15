/**
 * 2017-09-15 Tong Yuehong
 */

function open(te){
    for(n = 0; n < teacher.length; n++){
        if(teacher[n].name === te){
            teacher[n].open();
            return n;
        }
    }
    return -1;
}

function count(content){
    return teacher[te].count(content);
}

var teacher = [{
    name : 'Tom',
    open : function (){
        console.log(' open');
    },
    count :function(num){
        console.log(`payment = > ${num}`);
    }

},{
    name : 'Susan',
    open : function (){
        console.log('open');
    },
    count :function(hours){
        console.log(`worktime => ${hours*60}`);
    }
}]

var te = open('Tom');
count(20);