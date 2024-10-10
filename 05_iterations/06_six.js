const coding = ["java", "javascript", "python","c++", "c#", "Ruby"]
const value = coding.forEach(function (item){                   
      console.log(item);
      return item
})
console.log(value);                 // undefined


// forEach loop does not return any value so that "filter" comes in the picture.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (nums) => nums > 4)
console.log(newNums);                                // [ 5, 6, 7, 8, 9, 10 ]
                           //   OR
const newNums2 = myNums.filter( (nums) => {
    return nums > 4                                  // if we are opening the scope {} then we have to explicitely write "return"
})
console.log(newNums2);                                // [ 5, 6, 7, 8, 9, 10 ]


// can be also done by using forEach:
const newNums3 = []
myNums.forEach( (num) => {
    if (num > 5) {
        newNums3.push(num)
    }
})
console.log(`newNums3: ${newNums3}`);              // newNums3: 6,7,8,9,10

// books example