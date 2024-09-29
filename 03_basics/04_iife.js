// Immediately Invoked Function Expression

// function chai(){
//     console.log("DB connected!")
// }
// chai()  
                         // Instead of the above we can use iife
(function chai(){
    // named IIFE
    console.log("DB connected!");
})();                   // ; is necessary for ending iife or ending the context.
          
// sometimes we face global scope's pollution problem so for removing whatever the global scopes variabls are declared we used IIFE. 

// IIFE in arrow function:
(() => {
    // unnamed IIFE
    console.log("DB CONNECTED TWO")
})();
                     // we can also pass the parameters here, look as a function only.
((name) => {
    console.log(`DB CONNECTED TWO ${name} `)
})('Asmita');