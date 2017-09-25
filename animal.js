/**
 * 2017-09-20  Tong Yuehong
 */

function animal(){
    animal.prototype = {
        live : true,
        sex : 'male',
        eat : function(){
            console.log('animal.eat') ;
        }
    }
};
animal();


function bird(){

};
bird.prototype = {
    fly : function(){
        console.log('bird.fly')
    }
}
bird.prototype.__proto__ = animal.prototype;

function mammal(){
    
}; 
mammal.prototype = {
    birth : function(){
        console.log('mammal.birth');
    }
} 
mammal.prototype.__proto__ = animal.prototype;

function woodpecker(){
}
woodpecker.prototype.__proto__ = bird.prototype;

function sparrow(){

}
sparrow.prototype.__proto__ = bird.prototype;

function dog(){

}
dog.prototype.__proto__ = mammal.prototype;

function cat(){

}
cat.prototype.__proto__ = mammal.prototype;

var a = new woodpecker();
var d = new dog();
var c = new cat();
var b = new sparrow();

c.birth();
a.fly();
b.fly();
d.eat();
console.log(woodpecker.prototype.live)
woodpecker.prototype.eat();

console.log(typeof Object.create(Function.__proto__,{}))