/**
 * 2017-09-14       Tong Yuehong
 */

var student = {
    pass : true,
    age : 18,
    fun : function(){
        console.log(`pass =>${this.pass} age =>${this.age} fun =>${this.fun}`);
    }
}

student.fun();

//have a try
student.age = function(){
    this.age = 'aa';
};

student.fun();

student.age();

student.fun();
console.log(`student ${typeof student} , ${Object.getPrototypeOf(student)}`);
console.log(JSON.stringify(Object.getOwnPropertyDescriptor(student, 'pass')));

var o = Object.create(null, {
    foo: {
        waitable: true,
        configurable: true,
        value: 'hello'
    },
    bar: {
        configurable: false,
        get: function() { return 10; },
        set: function(value) {
            console.log('Seting `o.bar` to', value);
        }
    }
});
console.log(JSON.stringify(Object.getOwnPropertyDescriptor(o, 'foo')));

o.name = 1;

console.log(Object.keys(o));
console.log(`o ${typeof o}`, Object.getPrototypeOf(o));
console.log(`o ${typeof o}, ${Object.getPrototypeOf(o)}`);

var arr = ['a', 'b', 'c'];
arr['name'] = 'tongyuehong';
arr.age = 1;
console.log(Object.keys(arr));

console.log(arr['0']);

console.log(arr.name);
console.log(`arr ${typeof arr}`);
console.log(Object.getPrototypeOf(arr));
console.log(Object.getOwnPropertyDescriptor(arr, 'name'));

var a = function (){
    console.log('abc');
}
a.age = 23;
console.log(Object.keys(a));
console.log(a.age);
a();
console.log(`a ${typeof a} , ${Object.getPrototypeOf(a)}`);
console.log(Object.getOwnPropertyDescriptor(a, 'age'));
