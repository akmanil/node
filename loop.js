// // for loop
// for(let i =0 ;i < 5 ; i++ ){
//     console.log(i);
// }

// //while loop
// let a =0;
// while(a <5){
//     console.log(a);
//     a++;
// }

// //do while loop\

// let b = 0 ;
// do{
//     console.log(b);
//     b++;
// } while(b<5);

// // for in
// let obj = {name : "Anil",age:23 , city:"Delhi"}
// for (let key in obj){
//     console.log(key + " : " +obj[key]);
// }

// let arr =[1,2,3,4,5];
// for (let value of arr){
//     console.log(value);
// }
// //foreach
// arr.forEach(num =>console.log(num));
// //map
// arr.map(num =>console.log(num*2));
// //filter
// arr.filter(num =>console.log(num%2 === 0));
// //reduce
// const sum = arr.reduce((total, num) => total + num, 0);
// console.log(sum);

//lexical scope

function outer(){
    let x="i am outer";
    function inner(){
        console.log(x); // whre  x can access its lexicxalk scope or clouser
    }
    inner();
}
outer();