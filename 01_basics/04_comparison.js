//Basic Conversions*
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


// we can't comapre two differnt data types (it's a strict rule in typescript.
// Avoid the following type of Concersions*
console.log("2" > 1);        //sometimes it wont gives us predictable results.Here "2" is getting converted into a number.
console.log(null == 0);      //false
console.log(null > 0);       //false
console.log(null >= 0);      //true
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//In JS, equality check (==) and comparison(<,>).Both work differently.

//Strict Check (===), it checks the value with the data types.
console.log("2" === 1);