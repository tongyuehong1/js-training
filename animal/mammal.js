/**
 * 2017-09-22     Tong Yuehong
 */

const animal = require('./animal');

function mammal(){

}
mammal.prototype = {
    birth : function(){
        console.log('mammal.birth');
    }
} 
mammal.prototype.__proto__ = animal.prototype;

module.exports = mammal;
