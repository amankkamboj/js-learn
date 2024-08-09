// Es6

// class User{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@gmail.com","12345");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// Behind the scene

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function (){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function (){
    return `${this.username.toUpperCase()}`
}

const tea = new User("aman","aman@gg.com","adv");
console.log(tea.changeUsername());
console.log(tea.encryptPassword());
