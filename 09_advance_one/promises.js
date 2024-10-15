/*new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log("Async task!");
        resolve()
      }, 3000)
}).then(function(){
    console.log("Async resolved!")
})

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Asmita", email: "agre@.com"})
    },2000)
})
promiseTwo.then(function(user){
    console.log(user);
}) */

const promiseThree = new Promise(function(resolve, reject){
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
}).then((username)=> {
    console.log(username);
}).catch((error) => {
    console.log(error)
})