// var c = 700               // global scope
let  a = 10                  // 10
if(true){                 
    let a = 100;             // block scope : these values are only available within the scope
    const b = 200;
    var c = 300;
    console.log("INNER :", a);            // 100
}

console.log(a);            // will throw an error
console.log(b);            // will throw an error
console.log(c);            // wont throw an error and that was the problem with var.