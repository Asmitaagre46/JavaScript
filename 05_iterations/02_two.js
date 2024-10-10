// while loop:

let index = 0
while(index <= 10){
    console.log(`value of index ${index}`);
    index +=2
}

let myArray =[ "Asmita", "Vikrantt", "Ankita", "Yash", "Sagar"]
let arr = 0
while (arr < myArray.length) {
    console.log(`value of an array at ${arr} is ${myArray[arr]}`);
    arr++
}

// do-while loop:

let score = 1
do {
    console.log(`value of score is : ${score}`);
    score ++
} while (score <= 10);



let marks = 11
do {
    console.log(`value of score is : ${marks}`);          // value of score is : 11
    marks ++                                              // marks = 12
} while (marks <= 10);                                    // 12 < = 10   false (comes out of the loop)