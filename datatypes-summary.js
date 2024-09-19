//Premitive (call by value) menas when we are copying it from somewhere, so its original data reference is not given to us instead of this its copy is provided to us and chamges made into the copy.

// 7 types : String, Number, Boolean, Null(temperature from server), undefined(variable/memory space is declared but value is not given), symbol(uses for uniquness), BigInt

const score = 100      /** JavaScript is a dynamically typed language, 
                       which means that data types of variables are determined by the value they hold at runtime
                       and can change throughout the program as we assign different values to them. **/
const scoreValue =100.3
const isLoggedIn = false
let userEmail;  // let userEmail = undefined;
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);    //false

const bigNumber = 562313545465632314n



// Reference type: non-premitive means the values whose reference is allocated to direct memory.

// Arrays, Objects, Functions

const heros = ["Batman", "shaktiman"]

let myObj= {
    name: "Asmita",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof null);  //object
console.log(typeof myFunction);  //function (function object)

// non-primitive's data types is called as function
// non-primitive data types's return type ia always "object".




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ MEMORY +++++++++++++++++++++++++++++++++++++++++++

// memories: stack(Primitive) , Heap(non-premitive)
/** STACK (it only gives copy and changes made into the copy and not into the og value) **/
let myName = "asmita"

let myAnotherName = myName
myAnotherName = "asmi"

console.log(myName);           //asmita
console.log(myAnotherName);    //asmi



/** HEAP (changes made in original values) **/
let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne     // email : "user@google.com",upi: "user@ybl"

userTwo.email = "asmita@google.com"

console.log(userOne.email);   // asmita@google.com
console.log(userTwo.email);   // asmita@google.com



