const accountId =  12345                   //const is only constant use in js.
let accountEmail = "asmita@gmail.com"      //let and var are the 2 types of
var accountPassword = "212121"             //variables used in javascript.
accountCity = "Thane"             //it's not a best practice
let accountState;                     // undefined (it just create memory space)

//accountId = 767676 // not allowed

accountEmail = "yash34@gmail.com"
accountPassword = "90909"
accountCity = "Mumbai"

/*
Prefer not to use var 
bcz of issue in block scope(if,for loop) and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])