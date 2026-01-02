const course={
    coursename:'js in hindi',
    price:"999",
    courceInstructor:'hitesh'
}
// Old way to access properties
// console.log(course.courseInstructor);

//modern way to access properties(dysstructuring)
const{courceInstructor}=course
console.log(courceInstructor)
// Destructuring with Renaming
const{courceInstructor:instructor}=course
console.log(instructor)
