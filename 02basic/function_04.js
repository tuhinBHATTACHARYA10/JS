//Arrow functions
// Arrow functions are a concise way to write functions in JavaScript. They are often used for short, simple functions and do not have their own 'this' context.
//const add = (a, b) => a + b;
//console.log(add(5, 3)); // Output: 8
//this keyword 
const user={
    name:"Tuhin",
    age:21,
    welcomeMessage:function(){
        console.log(`wlecome ${this.name} to JavaScript!`)
        console.log(this)
    }

}
//user.welcomeMessage()
//user.name="tuhin123"
//user.welcomeMessage()
//console.log(this)//{}, In global scope, 'this' refers to the global object (window in browsers)
//normal function
//const tea = function (){
//    let name="tea"
//    console.log(this.name)//undefined, In a regular function, 'this' refers to the global object (window in browsers)
//}
//tea()// In a regular function, 'this' refers to the global object (window in browsers)
//arrow function
const coffee = () => {
    let name="coffee"
    console.log(this.name)//
}
//explicit return
const addone=(num1,num2)=>{
     return num1+num2
}
//implicit return
const addtwo=(num1,num2)=>num1+num2
//console.log(addone(5,3))//8
//console.log(addtwo(6,8))//14
const addthree=(num1,num2)=>(num1+num2)
//console.log(addthree(10,20))//30

// ==========================================
// 1. SYNTAX DIFFERENCES [00:00:47]
// ==========================================

// Normal Function
function sayHello() {
  console.log("Hello (Normal)");
}
sayHello();

// Arrow Function
const sayHelloArrow = () => {
  console.log("Hello (Arrow)");
};
sayHelloArrow();

// One-Liner (Implicit Return) [00:03:04]
// No curly braces or 'return' keyword needed for single expressions
const add = (a, b) => a + b;
console.log("Addition Result:", add(2, 3)); // Output: 5


// ==========================================
// 2. ARGUMENTS KEYWORD [00:04:38]
// ==========================================

// Normal functions have the 'arguments' object
function showArgs() {
  console.log("Normal Args:", arguments);
}
showArgs(10, 20, 30);

// Arrow functions do NOT have 'arguments' [00:05:26]
// Using 'arguments' here would throw a ReferenceError.
// Use the Rest Operator (...) instead:
const showArgsArrow = (...nums) => {
  console.log("Arrow Rest Params:", nums); // nums is a real array
};
showArgsArrow(10, 22, 33);


// ==========================================
// 3. HOISTING [00:06:54]
// ==========================================

hoistedFunction(); // This works!
function hoistedFunction() {
  console.log("I am hoisted!");
}

// arrowHoisted(); // ERROR: Cannot access 'arrowHoisted' before initialization
const arrowHoisted = () => {
  console.log("I am NOT hoisted.");
};
arrowHoisted(); // This must be called AFTER definition


// ==========================================
// 4. THE 'THIS' KEYWORD [00:08:24]
// ==========================================

const myObj = {
  value: 20,
  
  // Normal function: 'this' points to the caller (myObj)
  normalMethod: function() {
    console.log("Normal function 'this.value':", this.value); 
  },

  // Arrow function: 'this' points to the parent scope (Window/Global) [00:09:51]
  arrowMethod: () => {
    console.log("Arrow function 'this.value':", this.value); 
  }
};

myObj.normalMethod(); // Output: 20
myObj.arrowMethod();  // Output: undefined (because window.value is not defined)