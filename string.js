const name="Tuhin"
const repocount=39
//old syntax(bad practice)
console.log("My name is " + name + " and my repo count is " + repocount)
//new syntax(good practice)
console.log(`my name is ${name} and my repo count is ${repocount}`)
//declaring string as an object
const fruit=new String("Apple")
console.log(fruit) //Apple
console.log(typeof fruit) //object
console.log(fruit[1])//p 
console.log(fruit.__proto__)//String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
//common method
console.log(fruit.length)//5
console.log(fruit.toUpperCase())//APPLE
console.log(fruit.charAt(3))
console.log(fruit.indexOf('e'))
//substring
const gameName=new String('red_dead_redemption')
console.log(gameName.length)
const newString=gameName.substring(0,4)
console.log(newString)
const anotherGame=gameName.slice(-8,4)//accepts negative values
console.log(anotherGame)
//Trim(remove whitespaces)
const newStringOne='   Tuhin   '
console.log(newStringOne)//  Tuhin
console.log(newStringOne.trim())//Tuhin
//Replace
const url='https://youtu.be/fozwNnFunlo?si30#3pZoysTeGvZ6x2P'
console.log(url.replace('30#','=-'))//replace '30#' with '=-'

//Includes(Check existence)
console.log(url.includes('Tuhin'))//false
//Split(convert to array)
console.log(gameName.split('_'))

