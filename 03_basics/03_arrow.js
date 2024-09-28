// Note: "this" refers the current context

const user = {
    username : "Asmita",
    website: "youtube",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);               // "this" talks about the current context
    }
}
user.welcomeMessage()
user.username = "yash"
user.welcomeMessage()

console.log(this);

// Global object in browser is "window" but here "console.log(this)" it wil give {} i.e. empty object
// "this" can be only applicable in object and not in functions
function chai(){
    let username = "Asmita"
    console.log(this.username);             // undefined
}
chai()

/* const chai = function(){
    let username = "Asmita"
    console.log(this.username);             // undefined
}
chai() */

// arrow function:                        syntax:      () => {}
/* const chai = () => {
    let username = "Asmita"
    console.log(this.username);             // undefined
}
chai() */

const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(3,4));                  // 7

// Implicit return:
const addOne = (num1, num2) =>  (num1 + num2);

console.log(addOne(3,4));                  // 7
/* Note: when we use { } then we have to write "return", 
 and when we use ( ) then we don't have to write return */

//Implicit return in objects declaration:
 const addTwo = (num1, num2) =>  ({username: "asmita"});   

