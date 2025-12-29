const score=400
console.log(score)
const balance=new Number(100)
console.log(balance)//100
console.log(balance.toString())//'100'
console.log(balance.toString().length)//3
console.log(balance.toFixed())//100.0

const otherNumber=123.45678
console.log(otherNumber.toPrecision(5))//123.46

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'))

// +++++++++++++ Maths +++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-4))//4
console.log(Math.round(5.699))//6
console.log(Math.ceil(4.1))//5
console.log(Math.floor(4.5))//4
console.log(Math.min(-4,-3,-7,3))//-7
console.log(Math.max(-4,-3,-7,3))//3

console.log(Math.random())

const min = 10
const max = 20

// Formula for random number within a range
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
