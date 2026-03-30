/*let a=33//Global Scope
const b=44

if(true){//block scope
    let a=11
    const b=22
   
}
console.log(a)
console.log(b)
function one(){
    const username="tuhin"
    function two(){
        const website="youtube"
        console.log(username)// Accessing variable from parent scope (Closure)
    }
    //console.log(website)//ReferenceError: website is not defined
    two()
}
one()
if(true){
    const username="tuhin"
    if(username==="tuhin"){
        const website="youtube"
        console.log(username)// Accessing variable from parent scope (Closure)
    }
    //console.log(website)//ReferenceError: website is not defined
}*/
//console.log(username)//ReferenceError: username is not defined   

console.log(addone(5))//6, function declaration is hoisted
//console.log(addtwo(5))//ReferenceError: Cannot access 'addtwo' before initialization, function expression is not hoisted
function addone(num){//function declaration
    return num+1
}
//addone(5)//6
//console.log(addtwo(5))
const addtwo=function(num){//function expression
    return num+2
}
//addtwo(5)//7
