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
