/* new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log("Async task!");
        resolve()
      }, 3000)
}).then(function(){
    console.log("Async resolved!")
}) */


/* const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Asmita", email: "agre@.com"})
    },2000)
})
promiseTwo.then(function(user){
    console.log(user);
}) */



/* const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
       let error = false;
       if(error!=true){
        resolve({username: "yash", email: "yash@com"})
       }else{
        reject("Something went wrong!")
       }
    },2000)
})
promiseThree.then((user) => {
     console.log(user);
     return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("the promise is either resolved or rejected!")
}) */



/* const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(error!= true){
            resolve({username: "Vikrantt", age: 21})
        }else{
            reject("ERROR!")
        }
    },2000)
})
async function consumePromiseFour() {
    try {
        const response = await promiseFour
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFour(); */


/* async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E:" , error)
    }
}
getAllUsers(); */

// same thing as above by using try and catch:
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
   console.log("Error!")
})