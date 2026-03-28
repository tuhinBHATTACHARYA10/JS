function calculateCartPrice(...num){// Rest Parameter
    return num
}
console.log(calculateCartPrice(200, 400, 500))// [200, 400, 500]
const useer={
    name:'Tuhin',
    price:199
}
function handleObject(obj){
    console.log(`username is ${obj.name} and price is ${obj.price}`)
}
//console.log(handleObject(useer))
handleObject({
    name:'ashish',
    price:30
})
const arr=[100,200,300]
function handleArray(arr){
    return arr[1]
}
console.log(handleArray(arr))//200