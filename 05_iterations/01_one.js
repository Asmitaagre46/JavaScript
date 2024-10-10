// for:

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// nested for:

for (let i = 1; i < 3; i++) {
    console.log(`outer for loop ${i}`);
    for (let j = 1; j < 3; j++) {
        console.log(`outer for loop ${i} and inner for loop ${j}`);
        console.log(i + "*" + j + "=" + i * j );
    }
}

// for loops on arrays:

let myArrays = ["superman", "batman", "spiderman"]
console.log(myArrays.length);                     // 3
for (let i = 0; i < myArrays.length; i++) {
    const element =  myArrays[i];
    console.log(element);
}

// break and continue:

for (let i = 1; i <= 20; i++){
    if(i == 5){
        console.log("detected 5");
        break                                 // after the conditions hits, no statement will be going to be executed
    }
    console.log(`value of i is: ${i}`);
}



for (let i = 1; i <= 20; i++){
    if(i == 5){
        console.log("detected 5");
        continue                                // after the conditions hits, one statement after continue will be skipped and loop still get executed further
    }
    console.log(`value of i is: ${i}`);
}
