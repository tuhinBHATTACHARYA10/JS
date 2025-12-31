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