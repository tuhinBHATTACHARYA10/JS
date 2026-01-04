// Function Definition
function sayMyName(){
    console.log("T");
    console.log("U");
    console.log("H");
    console.log("I");
    console.log("N");
}

// Function Execution (Reference vs Execution)
// sayMyName() 

// Function with Parameters
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("tuhin"))
// console.log(loginUserMessage("tuhin"))