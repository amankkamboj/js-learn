const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})
// Resolve is connected with then
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task2 is completed");
        resolve()
    },1000)
}).then(function(){
    console.log("2nd Promise is consumed!");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({userName:"Aman",email:"aman@gmail.com"});
    }, 1000);
}) 

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error= false
        if(!error){
            resolve({userName:'Aman',password:"12345"});
        }
        else{
            reject('Error: Something went Wrong!');
        }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user);
    return user.userName;    
}).then((myUserName)=>{
    console.log(myUserName)
}).catch(function(error){
    console.log(error);
}).finally(()=>{
console.log("Finally promise is resolved or rejected!")
})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error= true
        if(!error){
            resolve({userName:'Js',password:"12345"});
        }
        else{
            reject('Error: Js went Wrong!');
        }
    }, 1000);
})
// Specialy for db connection
async function consumePromiseFive () {
    try {
        const response = await promiseFive
    console.log("Promise runed");
    
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
    
}
consumePromiseFive();

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

   const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log(error);
        
    }
   
    
}

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((response)=>{
    console.log(response);
})