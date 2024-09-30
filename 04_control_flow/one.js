 /* if(condition){

 }else{

 } */

 // <, >, <=, >=, !=, ==, ===

 const score = 200

 /* if(score > 100){
    let power ="fly"
    console.log(`User power: ${power}`);
 }
 console.log(`user power: ${power}`);   */          // Error: power is not defined (functional scope of power is already ended)

 if(score > 100){
    var power ="fly"
    console.log(`User power: ${power}`);
 }
 console.log(`user power: ${power}`);              // User power: fly  
                                                   // user power: fly
// That's why var is not in used!


// Implicit scope: means we don't have to put { }
const balance = 1000
if(balance > 500) console.log("Test");


// Nested conditions:
const amount = 1000
if(amount < 500){
    console.log("leass than 500");
}else if(amount < 750){
    console.log("less than 750");
}else if(amount < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");                 // less than 1200
}

// && (and = if both conditions true, then only scope will execute), 
// || (or = if one of the conditions is true then scope will execute).
const userLoggedIn = true
const debitCard = true
const loggedInFromgoogle = false
const loggedInFromemail = true

if(userLoggedIn && debitCard){                  // both true then true
    console.log("can buy courses")
}

if(loggedInFromgoogle || loggedInFromemail){   // one of them true then true
    console.log("user logged in")
}