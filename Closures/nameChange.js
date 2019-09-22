// var obj={
//     setName:function(name){
//         this.name=name;
//     },
//     setAge:function(age){
//         this.age=age;
//     },
//     Person(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// obj.age = 21

// function Person(){
//     // function setName(newname){
//     //     this.name = newname;
//     // }
//     // this.name = setName(name);
// }
// function Values(name,age){
//     this.name = name;
//     this.age = age;
// }
// var x = new Person("abdan");


// var emp = new Person()
// emp.setName("abdan")
// console.log(emp.name);
// =====================================


// function run(passedName){
//     var storedName = passedName ;
//     function Person(name){
//         this.name = name;
//     }
//     var person = new Person(storedName);
//     return person.name;
// }
// var emp = run("abdan");
// var emp1 = run("basil");
// console.log(emp);
// console.log(emp1);
// run.prototype.getName= function(){
//         console.log("hello");
// }
// function setName(name){
//     var x = run(name);
//     console.log(x);
// }


// =====================================

function Person(name,age){
    function run(value1,value2){
        this.name = value1;
        this.age = value2;
    }
    run(name,age);
}

Person.prototype.getName=function(){
        console.log(name);
}
Person.prototype.getAge=function(){
        console.log(age);
}
Person.prototype.setName=function(newName){
        name = newName;
}
Person.prototype.setAge=function(newAge){
        age = newAge;
}

var emp = new Person("abdan",21);
emp.getName();
emp.setName("Checking");
emp.getName();
emp.getAge();


// var running  = {
//     Person:function(name){
//         this.name = name;
//     },
//     getName:function(){
//         return this.name
//     } 
// }

// var x = running.Person("abdan")
// var y = running.Person("basil")
// console.log(running);


// Person.prototype.setName = function(newName){
//     this.name = newName;
// }
// Person.prototype.getName = function(){
//     return this.name;
// }
// var emp = new Person()
// emp.setName("abdan")
// console.log(emp.getName());