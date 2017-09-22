/**
 * 2017-09-22     Tong Yuehong
 */

function animal(){
    
};
animal.prototype = {
    live : true,
    sex : 'male',
    eat : function(){
        console.log('animal.eat') ;
    }
}


module.exports = animal;
