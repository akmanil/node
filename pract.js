//the classes
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello ,my name is ${this.name} and i am ${this.age} age years old`
    );
  }
}
// person("Anil",25).greet();

//call class
const Person = new person("Anil", 23);
Person.greet();

// const employee = class {
//     constructor(name ,age ,department){
//         super(name,age);
//         runInThisContext.department = departmant;
//     }
//     greet1(){
//         console.log(`${this.name} ,${this.age} ,${this.department}`);
//     }
// }

// // const Employee = new employee("Anil",23 ,"EE");
// // Employee.greet1();
// employee("Anil",23 ,"EE").greet1();

// const Employee = class {
//     constructor(name, age, department) {
//         this.name = name;
//         this.age = age;
//         this.department = department;
//     }

//     greet1() {
//         console.log(`${this.name}, ${this.age}, ${this.department}`);
//     }
// };

class employee extends person {
  constructor(name, age, department) {
    super(name, age);
    this.department = department;
  }
  greet1() {
    console.log(`${this.name}, ${this.age}, ${this.department}`);
  }
}
// Create an instance
const emp = new employee("Anil", 23, "EE");

// Call the method
emp.greet1(); // Output: Anil, 23, EE

class math {
   static Add(a,b){
        return console.log(a+b) ; // using static method the class call itself with out instrances
    }
}
math.Add(2,3);

//get set method


class circle {
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius *2;
    }
    set diameter(value){
        return this.radius = value/2;
    }
}
const Circle = new circle(5);
console.log(Circle.diameter);
Circle.diameter =14;
console.log(Circle.radius);

// extends keyword
class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name}is making a sound`);
    }
}

class Dog extends Animal{
    // super(name);
    speak(){
        console.log(`${this.name }is bark`);
    }
}
const dog =new Dog('buddy');
dog.speak();