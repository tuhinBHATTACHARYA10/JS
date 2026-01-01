//const tinderUser=new Object()//Singleton object
const tinderUser={}//non-singleton object

tinderUser.id='123Tuh'
tinderUser.name='Tuhin'
tinderUser.isLoggedin=false
//console.log(tinderUser)
const regularUser={
    email:"tuhin@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Tuhin",
            lastname:"Bhattacharya"
        }

    }
}
// Accessing nested objects
//console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}
const obj4={5:'a',6:'b'}
// Merging Objects
const obj3={obj1,obj2}
//console.log(obj3)// Problem: Creates object inside object
const obj5=Object.assign({},obj1,obj2,obj4)// Using Object.assign
const obj6={...obj1,...obj5}// Using Spread Operator (Most common)
console.log(obj6)

//Array of objects
const user=[
    {
        id:1,
        email:'tuhin@gmail.com'
    },
    {
        id:1,
        email:'tuhin@gmail.com'
    },
    {
        id:1,
        email:'tuhin@gmail.com'
    },
]
// Accessing Array of Objects
console.log(user[1].email)

// Important Object Methods
console.log(tinderUser)
console.log(Object.keys(tinderUser))// Returns Array: ['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser))// Returns Array: ['123bsd', 'Sammy', false]
console.log(Object.entries(tinderUser))// Returns Array of Arrays: [['id', '123bsd'], ...]

// Check property existence
console.log(tinderUser.hasOwnProperty('isLoggedin'))//true
console.log(tinderUser.hasOwnProperty('isLogged'))//false