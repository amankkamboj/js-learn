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
console.log(courseInstructor);

console.log(instructor);