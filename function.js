//invoke function - load the function immediately with out calling the function

(function(){
    console.log("Invoke function");
})()

//async await function

function delay(ms){
    return new Promise(res =>setTimeout(res ,ms));
}


async function sayHello(){
    console.log("Hello");
    await delay(1000);
    console.log("hello");
    console.log("After a min");
}
sayHello();

// async function sayHello(){
//    try{
//      console.log("Hello");
//     await delay(1000);
//     console.log("After 3min");
//    }
//    catch(err){
//     console.log(err);
//    }
// }
// sayHello();

// async function runParallel() {
//   const one = delay(1000).then(() => console.log("One"));
//   const two = delay(1000).then(() => console.log("Two"));
//   await Promise.all([one, two]);
// }

// runParallel();

// // higher Oder function
// function Factorial(fact){
//     return function(n){
//         return n*fact;
//     }
// }
// console.log(Factorial(2));

const obj = {
    name :"Anil",
    age :25,
    greet(){
        console.log(`Hello ,${this.name}`);
    }
}
obj.greet();

//constructor with call new

function person(name){
    this.name = name;
}
// where arrow function not work
const p = new person("Anil");
console.log(p.name);
