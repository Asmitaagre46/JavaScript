// var c = 700               // global scope
let  a = 10                  // 10
if(true){                 
    let a = 100;             // block scope : these values are only available within the scope
    const b = 200;
    var c = 300;
    console.log("INNER :", a);            // 100
}

console.log(a);            // will throw an error
// console.log(b);            // will throw an error
console.log(c);            // wont throw an error and that was the problem with var.



function one() {
    const username = "Asmita"

    function two(){                         // this function can access the outside varibales also bcz, it considered its as globally defined.
        const website = "youtube.com"
        console.log(username);              // Asmita
    }
    // console.log(website);                // error: scope

    two()
}

one()



if(true) {
    const username = "Asmita"
    if(username === "Asmita"){
        const website = " youtube.com"
        console.log(username + website);
    }
    // console.log(website);                  // error: scooping
}
// console.log(username);                     // error: sccoping






// 2 ways of making functions:
console.log(addOne(5))                   // this will work
function addOne(nums){
    return nums + 1
}
                                      // OR             (hoisting concept)
console.log(addTwo(5))                 // this will throw an error [Cannot access 'addTwo' before initialization]
const addTwo = function(nums){
    return nums + 2
}
