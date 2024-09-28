// arrays:

const myArr = [0, 1, 2, 3, 4, 5, 6];
const myHeros = ["Shaktiman", "Batman"];
const myArr2 = new Array(10, 45, 67, 87, 97);

console.log(myArr[0]);

// methods of array:

myArr.push(6);                  // push will add the new element in an array
myArr.push(7);
myArr.pop();                  // pop will remove the last added element of an array
myArr.unshift(9);             // [9, 0, 1, 2, 3, 4, 5, 6]
myArr.shift()
console.log(myArr);


console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();        // join will bind my array and also convert it into string.
console.log(newArr);
console.log(typeof newArr);


// slice, splice:

console.log("A" , myArr);

const myn1 = myArr.slice(1, 3);         // it will exclude last range
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);        // it will include last range also. Splice operator will manipulate the 
console.log(myn2);                     // original array.
console.log("c", myArr);