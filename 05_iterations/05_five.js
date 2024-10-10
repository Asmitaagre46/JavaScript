const coding = ["java", "javascript", "python","c++", "c#", "Ruby"]
 
// callback function:
coding.forEach(function (value){                   // function name(){}           but we don not write function's name in callback
      console.log(value)
})

// callback function using arrow function:
coding.forEach((item) => {
       console.log(item);
})

function printMe(item){
      console.log(item);
}

coding.forEach(printMe)                          // we just have to give the reference and no need of calling the function

coding.forEach((item,index,arr) => {
      console.log(item,index,arr);
}) 


// accessing the values of an object from an array:
const myCoding = [
      { 
          "language":"javascript",
          "languageFile":"js"
      },
      {
          "language":"python",
          "languageFile":"py"
      },
      {
           "language":"ruby",
           "languageFile":"rb"
      }
]

myCoding.forEach((item) => {
      console.log(item.languageFile);
})