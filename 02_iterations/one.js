//For loop
// for (let index = 0; index < array.length; index++) {
//     // Block scope
//     const element = array[index];
    
// }

// break and continue
// When break executed immediatley control goes out from the loop
// When continue executed then control skip that condition and continue next iteration.


// For off
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(`Number : ${num}`);  
}

// for in
const myObj={
    name:"aman",
    education:"MCA",
    occupation:"Web developer",
    'address':"Haryana"
}

for (const key in myObj) {
   // console.log(myObj[key])
}
const codingLng = ['PHP', "Java","Cpp","Python","Swift"];

codingLng.forEach(function(item){
    console.log(item);
})