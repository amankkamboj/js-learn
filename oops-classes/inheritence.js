class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email =email
        this.password = password
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`)
    }
}

const chai = new Teacher("Aman","aman@gmail.com","12345");
const chaiMasala = new User("Kamboj");
chai.addCourse();
chai.logMe();
chaiMasala.logMe();

console.log(chai instanceof User)