//learn functions

//function declaration
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!

//function expression
const farewell = function(name) {
  return "Goodbye, " + name + "!";
};
console.log(farewell("Bob")); // Output: Goodbye, Bob!
//arrow function
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
//immediate invoked function expression (IIFE)
(function() {
  console.log("This function runs immediately!");
})();
// Output: This function runs immediately!
//callback function
function processUserInput(callback) {
  const name = "Charlie";
  console.log(callback(name));
}
processUserInput(function(name) {
  return "Hello, " + name + "!";
}); // Output: Hello, Charlie!
//nested function
function outerFunction(x) {
  function innerFunction(y) {
    return x + y;
  }
  return innerFunction;
}
const add5 = outerFunction(5);
console.log(add5(3)); // Output: 8
// Output: 8
//default parameters
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(3)); // Output: 6
// Output: 6
//rest parameters
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}