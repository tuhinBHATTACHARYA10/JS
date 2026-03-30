//IIFE (Immediately Invoked Function Expression)
(function chai() {//named iife
    console.log(`Chai is great!`);
})();//iife syntax
((name)=>{//simple iife with arrow function and parameter
    console.log(`chai is great and ${name} loves it!`)
})('tuhin')//iife with arrow function and parameter