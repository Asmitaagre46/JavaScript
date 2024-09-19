// Date

let myDate = new Date()
console.log(myDate.toString());  //Sun Jun 02 2024 22:32:53 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());  //2024-06-02T17:03:37.992Z
console.log(myDate.toJSON());    //2024-06-02T17:04:28.440Z
console.log(myDate.toDateString());   //Sun Jun 02 2024
console.log(myDate.toLocaleString()); //2/6/2024, 10:36:21 pm

console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 0, 23)
//console.log(myCreatedDate.toDateString());   //Tue Jan 23 2024

let myNewCreatedDate = new Date(2024, 0, 23, 5, 3)
console.log(myNewCreatedDate.toLocaleString());  //23/1/2024, 5:03:00 am

//let myCreatedDate = new Date("2024-01-23")   //YY-MM-DD
//console.log(myCreatedDate.toLocaleString());   

let myCreatedDate = new Date("01-23-2024")   //MM-DD-YY
console.log(myCreatedDate.toLocaleString());   

let myTimeStamp =Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());   //time in miliseconds
console.log(Math.floor(Date.now()/1000));   //time in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());   //day starts from monday  
console.log(newDate.getMonth() + 1); //months start from 0 (jan) +1

newDate.toLocaleString('default',{
    weekday: "long"           //Monday
})                //customized way
