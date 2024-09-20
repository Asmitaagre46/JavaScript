// objects are declared in 2 ways: 1] Literal 2]. Constructor
// object made from constructor is "singleton"
// declaration of object through constructor:

Object.create

// Object Literals:
// declare object name 'user' and gives values to it
const mySym = Symbol("myKey1")

const user = {
    name: "Asmita",                // behind the scene the keys are stored as a string i.e. "name", "age"...
    "full name": "Asmita Agre",
    [mySym]: "myKey1",             // syntax: for declaring symbol
    age: 21,
    email: "asmita@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Friday"]
}

// 2 ways of accessing the object :
console.log(user.email);
console.log(user["email"]);                 // beneficial way for accssing the keys which are declared in "full name".
console.log(user["full name"]);             // we cant not access this by .full name

console.log(user.mySym);                    // ERROR: undefined
console.log(user["mySym"]);                 // ERROR: undefined
console.log(user[mySym]);                   // myKey1

// for changing the values of objects:
user.email = "yash@gmail.com";
console.log(user);

// Object.freeze(user);                  // by using freeze method, any further chnages to user object are not going to reflect
user.email = "asmita@gmail.com";
console.log(user);                     // email value will be same as before suing freeze method();


// Adding Functions to the object:
user.greeting = function() {
    console.log("Hello Asmita!");
}

// here we can access it,
console.log(user.greeting);             // [Function (anonymous)]       (function return back) function didnt execute but function's reference has come
console.log(user.greeting());           // Hello Asmita!

user.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`);
}
console.log(user.greetingTwo());        // Hello user, Asmita