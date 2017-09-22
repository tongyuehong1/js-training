/**
 * 2017-09-22     Tong Yuehong
 */

const animal = require('./animal');

function bird(){

};
bird.prototype ={
    can : function(){
        console.log('bird can fly');
    }
}
bird.prototype.__proto__ = animal.prototype;
module.exports = bird;
