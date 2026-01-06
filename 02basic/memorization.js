// Function to be memoized
function square(n) {
    return n * n;
}

// The Memoize Wrapper
function memoize(func) {
    let cache = {}; // The closure variable to store results

    return function(...args) {
        let n = args[0]; // Assumes single argument for simplicity
        
        if (n in cache) {
            // Return cached value if it exists
            return cache[n];
        } else {
            // Calculate, Store, and Return
            let result = func(n);
            cache[n] = result;
            return result;
        }
    }
}

// Usage
const efficientSquare = memoize(square);

console.time("First Call");
console.log(efficientSquare(5)); // Calculates 5*5
console.timeEnd("First Call");   // Takes normal time (e.g., ~5ms)

console.time("Second Call");
console.log(efficientSquare(5)); // Returns cached 25
console.timeEnd("Second Call");  // Extremely fast (e.g., ~0.06ms) [00:08:58]