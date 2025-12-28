//Stack(premetive) vs Heap(non-premetive) Memory Allocation in JavaScript
// In JavaScript, primitive data types are stored in stack memory, while non-primitive data types (objects, arrays, functions) are stored in heap memory.
// Stack memory is used for static memory allocation and the execution of a thread, while heap memory is used for dynamic memory allocation.
// --- Stack Memory Example (Primitive Types) ---
let name="user" //stored in stack
let myName=name //copying value from stack to stack
myName="Tuhin" //stored in stack
console.log(name) //user
console.log(myName) //Tuhin
// Explanation: 'myName' got a copy of 'name'. 
// Changing 'myName' did not affect the original variable.
// --- Heap Memory Example (Non-Primitive Types) ---
let user={
    name:"user" //stored in heap
}
let admin=user //copying reference from stack to stack
admin.name="Tuhin" //modifying value in heap

console.log(user.name) //Tuhin
console.log(admin.name) //Tuhin
// Explanation: 'admin' got a reference to the same object in the Heap as 'user'.
// Changing 'admin.name' directly modified the original object, so 'user.name' also reflects the change.