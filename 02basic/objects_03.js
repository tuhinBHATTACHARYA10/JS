const course={
    coursename:'js in hindi',
    price:"999",
    courceInstructor:'hitesh'
}
console.log(course.courceInstructor)// Accessing object properties using dot notation
const{courceInstructor}=course// Object Destructuring
console.log(courceInstructor)// Accessing object properties using object destructuring
const{courceInstructor:instructor}=course// Object Destructuring with renaming
console.log(instructor)// Accessing object properties using object destructuring with renaming