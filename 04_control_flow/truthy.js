const userEmail = "asmita@gmail.com"
if(userEmail){
    console.log("user has an email")                // o/p: user has an email
}else{
    console.log("user dont have an email")
}

const userEmailId = ""
if(userEmailId){
    console.log("user has an email")
}else{
    console.log("user dont have an email")           // o/p: user dont have an email
}

const useremail = []
if(useremail){
    console.log("user has an email")                // o/p: user has an email
}else{
    console.log("user dont have an email")
}

// Falsy values: false, 0, -0, BigInt 0n, "", null, undefiend, NaN
// Truthy values: true, "0", 'false', " ", [], {}, function(){} empty function

if(useremail.length === 0){                   // checking whether arrays are empty or not
    console.log("Array is empty")
}

const emptyObj = {}                          // checking whether objects are empty or not
if(Object.keys(emptyObj).length === 0) {     // Object.keys(emptyObj) this is the conversion of object keys into an array then applying array property .length
    console.log("object is empty")
}

// Extra things to remember: 
false == 0  // true
false == ''  // true
0 == ''   // true

// Nullish coalescing opertor (??) : null undefiend              it works as a callback.
let val1;
// val1 = 5 ?? 10            // 5
// val1 = null ?? 10            // 10
// val1 = undefined ?? 10        // 10
val1 = null ?? 10 ?? 20          // 10

console.log(val1);


// Terniary operator:
// syntax:    condtion ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");