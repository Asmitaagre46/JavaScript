const score = 400
console.log(score);

const balance = new Number(100)        //type will be strictly number
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));      //100.00  (till 2 decimals)

const otherName = 23.8966
console.log(otherName.toPrecision(3));      //23.9

const anotherName = 123.8966       //1123.8966 (o/p: 1.12e+3)
console.log(anotherName.toPrecision(3));     //124        

const hundreds = 10000000         //for easy representation of value
console.log(hundreds.toLocaleString('en-IN'));


// ******************************* Maths ***********************************//
console.log(Math);
console.log(Math.abs(-4));      //to change negative value to positive value (absolute)
console.log(Math.round(4.6));  //5
console.log(Math.ceil(4.2));   //5 (takes top value)
console.log(Math.floor(4.9));  //4 (takes lowest value)
console.log(Math.min(5, 6, 9, 2));    //2
console.log(Math.max(5, 6, 9, 2));    //9


console.log(Math.random());                     //value will be between 0 and 1.
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10)+ 1);   //value wiil be between 1-9
//*10  will shift the value to the left but if value came 0.01 then after shifting to left math.floor will give 0 so, to avoid this we added 1.(minimum value should be 1)

// when we want to give the particular range for value
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1))+ min)
//instead of *10 we,use (max - min) for my range that I want values between. and +1 for avoiding zero case and then + min for having atleast this much minimum value I want.<10