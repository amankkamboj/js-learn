// object literals

const user = {
    userName:"Aman",
    loginCount:9,
    signedIn:true,
    getUserDetails: function(){
        console.log("Got user details")
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());

// Construction function
// new Date() // new keyword is a construction function, it allows multiple instacnces for a single object. it provide new context

function User(username, loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new User("aman","13",true);
const userTwo = new User("aman kamboj","135",false);
console.log(userOne);
console.log(userTwo);
