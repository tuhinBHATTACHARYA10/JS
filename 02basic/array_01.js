//Declaration of array
const myArr=[0,1,2,3,4]
const myHeroes=['Shaktiman','naagraj']
const myArr2=new Array(1, 2, 3, 5, 7)
//console.log(myArr2[1])

//Array methods
myArr.push(6)//Adds 6 at the end
myArr.pop()//Removes the last element
myArr.unshift(9)//add 9 to the start and shift the values 
myArr.shift(3)// Removes the first element
console.log(myArr[0])
console.log(myArr.includes(7))//false
console.log(myArr.indexOf(2))//2

const newArr=myArr.join()
console.log(myArr)
console.log(newArr)//"0,1,2,3,4,5" (String type)
// slice, splice
console.log('A',myArr)
const myn1=myArr.slice(1,4)// Returns [1, 2]. Does not change myArr.
console.log(myn1);
console.log("B ", myArr); // Original array remains same
const myn2=myArr.splice(1,3)// Returns [1, 2, 3]. Removes these from myArr.
console.log("C ", myArr); // Original array is modified (elements removed)
console.log(myn2);