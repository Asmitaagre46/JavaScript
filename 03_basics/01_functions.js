
function sayMyName() {
    console.log("A");
    console.log("S");
    console.log("M");
    console.log("I");
    console.log("T");
    console.log("A")
}

sayMyName           // function's reference
sayMyName()         // functions's execution


/* 

function addTwoNumers(num1, num2) {
    console.log(num1 + num2);
}
const result = addTwoNumbers(1,1)
console.log(result);

*/


function addTwoNumbers(number1, number2){               // parameters : when we passing something while defining the function
    let result = number1 +  number2
    return result                                      // after return statement, function stops executing.
}

const result = addTwoNumbers(3,2)                      // arguments : whwn we passing values while caliing the function
console.log("Result :", result);

function loggedInUsername(username){
    return `${username} just logged in!`
}
console.log(loggedInUsername("Asmita"));

// NOTE: when we are returning something, then we have to print the execution. console.log
// ans when we did not pass anything (arguments) , it will return "undefined"

function loggedInUsername(username){
    if(username === undefined) {                             // OR : if(!username){}
        console.log("Please enter a valid username!");
        return
    }
    return `${username} just logged in!`
}
console.log(loggedInUsername());

function loggedInUsername(username = "sam"){                               // can also pass here default value
    if(!username){
        console.log("Please enter a valid username!");                     //  this blaock will never execute
        return                                                               
    }                                                                      
    return `${username} just logged in!`
}

console.log(loggedInUsername());                                          // here username's value will be atleast to the minimum is "sam" or if we provide some value tyen that value wil overwrite.



function calculateCartPrice(...num1){                          // ... is a rest opearator or spread operator. it will spread the entrire function's values
    return num1
}
console.log(calculateCartPrice(200,700,500,400));

function calculateCartPrice(val1, val2, ...num1){                         
    return num1
}
console.log(calculateCartPrice(200,700,500,400));

// objects in functions:
const user = {
      username : "Asmi",
      price : 300
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);
                             // OR
handleObject({
    username : "yash",
    price : 300
})

// arrays in functions:
const myNewArray = [230,450,444,100,890];

function returnSecondValue(anyArray){
    return anyArray[1];
}

console.log(returnSecondValue(myNewArray));
                             // OR
console.log(returnSecondValue([670,200,1000,460]));