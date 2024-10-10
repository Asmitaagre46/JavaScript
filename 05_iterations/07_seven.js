const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let myNewNumbers = myNumbers.map( (nums) => nums + 1)
console.log(myNewNumbers);                     /*[
                                                       2, 3, 4,  5,  6,
                                                       7, 8, 9, 10, 11
                                                 ] */
//  or
 myNewNumbers = myNumbers.map( (nums) => { return nums + 1})
console.log(myNewNumbers);


// chaining:
myNewNumbers = myNumbers.map( (nums) => nums * 10).map( (nums) => nums + 1).filter( (nums) => nums > 50)
console.log(myNewNumbers);                        // [ 51, 61, 71, 81, 91, 101 ]