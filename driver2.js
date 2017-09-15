/**
 * 2017-09-15   Tong Yuehong
 */

var device =['/dev/console', '/dev/display'];

function open(dev){
    for(n = 0; n <= driver.length;n++){
        if(driver[n].type === dev){
            driver[n].open();
            return n;
        }
    }
}

function read(fd){ 
    return driver[fd].read();
}

function write(fd, content){
    return driver[fd].write(content);
}

function close(fd){
    return driver[fd].close();
}

var driver = [{
    type : '/dev/console',
    open : function (){
        console.log('console is open');
    },

    read : function (){
        console.log('console is read');
    },

    write : function (content){
        console.log(`console ${content}`);
    },

    close : function (){
        console.log('console is close');
    }
},{
    type : '/dev/display',
    open : function (){
        console.log('display is open');
    },

    read : function (){
        console.log('display is open');
    },

    write : function (content){
        console.log(`display ${content}`);
    },

    close : function (){
        console.log('display is close');
    }
}];

var fd = open('/dev/display');
write(fd, 'www');
close(fd);

var fd = open('/dev/console');
write(fd, 'hello');
close(fd);
