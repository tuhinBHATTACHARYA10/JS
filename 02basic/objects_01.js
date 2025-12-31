//Singleton
//Object.create

//Object literels
const mySym=Symbol('key1')

const jsUser={
    name:'Tuhin ',
    'Fullname':'Tuhin Bhattacharya',
    [mySym] : 'myKey',
    age :20,
    location:'kolkata',
    email:'tuhin@gmail.com',
    isloggedin:false,
    lastLogindays:['mon','sat']

}
//console.log(jsUser.email)
//console.log(jsUser['email'])
console.log(jsUser['Fullname'])//only acsess like this way
console.log(jsUser[mySym])//accessed like a symbol like this only,if not then it will be string
jsUser.email = "tuhin@chatgpt.com"//assigning new value
//Object.freeze(jsUser)//cant change the values
jsUser.email = "tuhin@microsoft.com"//will not change
console.log(jsUser);// email: 'tuhin@chatgpt.com',
jsUser.greeting=function(){
    console.log('hola amigo')
}
console.log(jsUser.greeting())
jsUser.greetingFromMe=function(){
    console.log(`hola from,${this['Fullname']}`)
}
console.log(jsUser.greetingFromMe())