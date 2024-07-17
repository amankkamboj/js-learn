"use script"

// console.log("Aman Kamboj");
// Comparisons
// console.log("2">1)
// console.log("02">1)
// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

// Data types
// Primitives and Non primitives
// 7 Primitive type (call by value)
// - Strings, Number, Boolean, null, undefined, Symbol, BigInt

// Reference type or non primitive 
// Array, Objects, Functions

// Memory in javascript
// Stack (Primitive), Heap (Non Primitive)
// Stack memory have copies of there variable we stored in it means whenever we retrive any data it is the copy of that variable.

// From heap we always get the reference of Array/object/func

// Strings in js
// In modern Javascript we use backtick operators
const uName = "Aman"
const repoCount =50;
//console.log(`My name ${uName} and repositiries ${repoCount}`);


// Object distructuring

const course = {
        coursename:"Js in hindi",
        price:"999",
        courseInstructor:"Aman"
}
// course.courseInstructor

const {courseInstructor} =course;
const {courseInstructor: instructor} = course;
// console.log(courseInstructor);

// console.log(instructor);

function demoW(pram1,pram2){
        // body of function
}

// demoW(argument1,argument2);

 // Reset operator or spread operator
 // It is used when we don't  know how many params or argument will be passed in a function so we use reset operator to handel those prams in the array like in below example

 function calculateCartPrice(...price){
        return price
 }
 function calculateCartPrice2(val1,val2,...price){
        return price
 }
//  console.log( calculateCartPrice(200,300,400) );


// Scope in js

// scope will be inside the curly braces for a and b variable but if using var to define the variable c it is applicable after the curly braces scope. If so many deveoplers working and they use the same name of variables with var key word that makes problem

if(true){
        let a = 10
        const b = 20
        var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);

// This keyword used to repersent reference in current context

const user = {
        username:"Aman",
        age:30,
        welcomeMessage:function(){
                console.log(`${this.username} , Welcome to user!!`);
        }
}
// user.welcomeMessage();
// user.username="Aman Kamboj"; //Changing current context
// user.welcomeMessage();

// const addTwo =(num1, num2)=>{
//         return num1+num2;
// }

// const addTwo = (num1,num2) => (num1+num2)

// Immediately Invoked Function Expressions (IIFE)

// (function AmanDev(){
//         console.log('DB CONNECTED');
// })(); //Always end IIFE
// From global scope polution we IIFE

// ( (uname) => {
//         console.log(`DB CONNECTED 2 ${uname}`)
// })("Aman");

/*
1.JS creates Global excution context 

2.Next it creates memory phase

3.Memory phase - In this phase,the variables are set to undefined 

  until the execution phase(next phase) and the functions are set to their definitions.

4.Next it creates the execution phase

5.Execution phase - In this phase,the variables are initialsed to given values and 

  when the function s are called,it creates a memory phase and execution phase for the function 

  just like the main one.

For live demo:
browser > inspect > Sources
create a snippet with few functions and visually experience the call stack.

correct me if there are any mistakes or add to this if something is missing. */

// Truthy and falsy values

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Except from falsy values all are truthy
// truthy values
// "0",'false', " ", [], {}, function(){}, 

// Check array 
// const ArrData = [];
// if(ArrData.length===0){
//         console.log("Array is empty");
// }
// Check object
const ObjData = {};
// if(Object.keys(ObjData).length ===0){
//         console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined
// let val1;
// // val1 = 5 ?? 10
// val1 = null ?? 12;
// console.log(val1);

// Ternairy operator

// condition ? true : false
