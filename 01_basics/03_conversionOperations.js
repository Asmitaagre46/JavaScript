let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);   //Not A Number

//there is no strict check in javascipt thats why some people uses TypeScript

// "33" => 33
// "33abc" => NaN
// true => 1;  false => 0
// undefined => NaN
// null => 0
// any kind of string ("asmita") =>NaN

let isLoggedIn = true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));

// *************** Operations ***********************
let value = 3 
let negValue = -value
//console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);  //power
console.log(2/2);
console.log(2%3);

let str1 = "Hello"
let str2 = " Asmita"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2 + 2);  //122
console.log(1 + 2 + "2");  //32
console.log((3 + 4) * 5 % 3);   //best practice is to spcify


/**If used postfix, with operator after operand (for example, x++), 
the increment operator increments and returns the value before incrementing.**/
let x = 3;
const y = x++;
 
 console.log(x, y);
 // Expected output: "x:4, y:3"

/**If used prefix, with operator before operand (for example, ++x),
 the increment operator increments and returns the value after incrementing.**/
 let a = 3;
 const b = ++a;
 
 console.log(a, b);
 // Expected output: "a:4, b:4"


 
 
 