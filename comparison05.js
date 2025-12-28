console.log(2>1)//true
console.log(2<1)//false
console.log(2==1)//false
console.log(2>=1)//true
console.log(2<=1)//false
console.log(2!=1)//true
console.log(2!=2)//false
//comparing different data types
console.log(2=="2")//true,When comparing a string to a number (e.g., "2" > 1), JavaScript automatically converts the string to a number, resulting in true.
console.log("02">1)//true
//null(Avoid these)
console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true
//undefined(Avoid these)
console.log(undefined==0)//false
console.log(undefined>0)//false
console.log(undefined<0)//false
//strict equality operator
console.log(2==="2")//false
console.log(2!=="2")//true
