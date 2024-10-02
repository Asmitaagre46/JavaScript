// reduce 
const myNums = [1, 2, 3]
let initialValue = 0
let myTotal = myNums.reduce(function(accumulator, currentValue) {
    console.log(`acc: ${accumulator}, currValue: ${currentValue}`)
     return accumulator + currentValue
}, 0)

console.log(myTotal);

/*  o/p:
acc: 0, currValue: 1
acc: 1, currValue: 2
acc: 3, currValue: 3
6 */

// by using arrow function:
myTotal = myNums.reduce( (accumulator,currentValue) => accumulator+currentValue,0)
console.log(myTotal)

// shoping cart example: