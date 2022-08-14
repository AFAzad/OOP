class greet{
    message(){
        console.log("Hello! Good Morning Everyone");
    }
    hello(){
        console.log("I hope everybody is fine");
    }
}

let a = new greet();

a.message();
a.hello();

//Types of methods:
//01. Constructor
//02.Prototype
//03.Statics

class student{
    constructor(name){
        this.name=name;
        console.log("This is constructor Function");
    }
    hey(){
        console.log("Hey ! " + this.name);
    }
    static staticMethod(){
        console.log("Is this static function ? Yes. ")
    }
}
let cont = new student("Gayu");
let cont1 = new student("Raaz");
// cont.name ="Gayu";
cont.hey();
cont1.hey();
student.staticMethod();
