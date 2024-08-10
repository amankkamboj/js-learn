class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value;
    }
    get password(){
        return `${this._password.toUpperCase()}`;
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const newUser = new User("aman","aman@gmail.com","df123amna")
console.log(newUser.password)
console.log(newUser.email)