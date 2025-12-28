//premitive datatype(call by value)
//7 types:String,Number,Boolean,null,undefined,symbol,bigint
const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id===anotherId)//false

const bigNumber=1236136737728178381838273827383783n

//non-premitive datatype(call by reference)
//object,array,function
const heroes=["shaktiman","nagraj","doga"]
let myObj={
    name:"Tuhin",
    age:21,
}
const myFunction=function(){
    console.log("hello world")
}

//JavaScript is a dynamically typed language, meaning you don't need to define the data type (e.g., int, string) when declaring variables.
// https://262.ecma-international.org/5.1/#sec-11.4.3