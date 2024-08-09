class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
        
    } 
    // prevent from access use static
    static createId(){ 
        retrun `123`
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email =email
    }
}
const aman = new User("Kamboj")
// console.log(aman.createId())

const iphone = new Teacher("Iphone aman","ip@gg.com")

console.log(iphone.logMe())