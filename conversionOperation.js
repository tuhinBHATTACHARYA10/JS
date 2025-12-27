let score="33"
console.log(score)//33
console.log(typeof score)//string
let valueInNumber=Number(score)//convert String into Number
console.log(valueInNumber)//33
console.log(typeof valueInNumber)//Number
//different way to convert String to Number
//case 1:
let score2="33abc"
let valueInNumber2=Number(score2)
console.log(valueInNumber2)//NaN
console.log(typeof valueInNumber2)//Number
let valueInNumber3=parseInt(score2)
console.log(valueInNumber3)//33
console.log(typeof valueInNumber3)//Number
//case 2: 
let score3=null
let valueInNumber4=Number(score3)
console.log(valueInNumber4)//0
console.log(typeof valueInNumber4)//Number
//case 3:
let score4=undefined
let valueInNumber5=Number(score4)
console.log(valueInNumber5)//NaN
console.log(typeof valueInNumber5)//Number
//case 4:Boolean
let score5=true
let valueInNumber6=Number(score5)
console.log(valueInNumber6)//1
console.log(typeof valueInNumber6)//number