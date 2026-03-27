const marvelHeroes=['Ironman','Captain America','Thor']
const dcHeroes=['Batman','Superman','Flash']

//___Problem with push___
//marvelHeroes.push(dcHeroes)
//console.log(marvelHeroes)//['Ironman','Captain America','Thor',  [ 'Batman', 'Superman', 'Flash' ]]
//console.log(marvelHeroes[3][0])

// --- Concat ---
//const allHeroes=marvelHeroes.concat(dcHeroes)
//console.log(allHeroes)//[ 'Ironman', 'Captain America', 'Thor', 'Batman', 'Superman', 'Flash' ]

// --- Spread Operator (Best Practice) ---
const allNewHeroes=[...marvelHeroes,...dcHeroes]
console.log(allNewHeroes)//[ 'Ironman', 'Captain America', 'Thor', 'Batman', 'Superman', 'Flash' ]

// --- Flattening Nested Arrays ---
const anotherArray=[1,2,3,[5,6,8],4,7,[10,20,[40,30],9]]
const realArray=anotherArray.flat(Infinity)//[1, 2,  3,  5,  6,  8, 4, 7, 10, 20, 40, 30,9]
console.log(realArray)

// --- Checking and Converting to Arrays ---
console.log(Array.isArray('Tuhin'))//false
console.log(Array.from('Tuhin'))//[ 'T', 'u', 'h', 'i', 'n' ]

// Interesting Interview Case
console.log(Array.from({name:'Tuhin'}))// [] - Returns empty array because it doesn't know to use keys or values

let s1=12
let s2=17
let s3=25
console.log(Array.of(s1,s2,s3))//The resulting array [100, 200, 300] does not have a name yet. It is created, printed to the console, and then immediately forgotten because you didn't save it into a variable.

let score1 = 100;
let score2 = 200;
let score3 = 300;

// Here, 'Array' is the tool used to make it.
// 'finalScores' is the NAME of the result.
const finalScores = Array.of(score1, score2, score3);

console.log(finalScores);
finalScores.push(5);// [100, 200, 300, 5]
finalScores.pop()// [100, 200, 300]
finalScores.unshift(50)// [50, 100, 200, 300]
finalScores.shift()// [100, 200, 300]
finalScores.splice(1,1)// [100, 300]
console.log(finalScores) // [100, 300]
finalScores.indexOf(300)//1
finalScores.lastIndexOf(100)//0
finalScores.includes(500)//false
finalScores.find(score=>score>150)//300
finalScores.findIndex(score=>score>150)//1
finalScores.forEach(score=>console.log(score))//100 300
finalScores.map(x => x * 2) // [200, 600] - Creates a new array with the results of calling a provided function on every element in the calling array. The original array remains unchanged.
finalScores.map(x => x + "!") // [ '100!', '200!', '300!' ]
finalScores.map(x => x > 1) // [true, true] - Checks if each element is greater than 1 and returns a new array of boolean values. The original array remains unchanged.
finalScores.filter(x => x > 250) // [300] - Creates a new array with all elements that pass the test implemented by the provided function. The original array remains unchanged.
console.log(finalScores) // [100, 300] - The original array remains unchanged after using map and filter methods.
console.log(finalScores.filter(x => x % 2 === 0))  
finalScores.reduce((acc, score) => acc + score, 0) // 400 - Reduces the array to a single value by executing a reducer function on each element of the array. The original array remains unchanged.
let arr=[2,4,7,8]
arr.every(x => x%2===0) // false - Checks if all elements in the array pass the test implemented by the provided function. Returns a boolean value. The original array remains unchanged.
arr.some(x => x%2===0) // true - Checks if at least one element in the array passes the test implemented by the provided function. Returns a boolean value. The original array remains unchanged.