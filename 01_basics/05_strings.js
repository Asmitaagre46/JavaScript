const name = "Asmita"
const age = 20

console.log(`Hello my name is ${name} and my age is ${age}`);
// string interpolation concept     benefit: on the go we can add method to the variable

const gameName = new String('asmita-aa')  //string declaration

console.log(gameName[0]);   //key-value pair access (a)

// methods or functions
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-6, 1)     //negative can be used here only.
console.log(anotherString);

const newName = "         asmita       "
console.log(newName);
console.log(newName.trim());   //for removing the extra spacing in text.

const url = "https://asmita.com/asmita%20agre"
console.log(url.replace('%20', '-'));              // https://asmita.com/asmita-agre

console.log(url.includes('asmita'));   //true

console.log(gameName.split('-'));   // strings in the form of array.