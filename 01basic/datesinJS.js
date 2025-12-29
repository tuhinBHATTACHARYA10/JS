let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())//Mon Dec 29 2025 20:21:48 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())//Mon Dec 29 2025
console.log(myDate.toISOString())//2025-12-29T14:54:50.184Z
console.log(myDate.toJSON())//2025-12-29T14:54:50.184Z
console.log(myDate.toLocaleDateString())//29/12/2025
console.log(myDate.toString())//Mon Dec 29 2025 20:27:47 GMT+0530 (India Standard Time)
console.log(myDate.toTimeString())//20:28:37 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString())//Mon, 29 Dec 2025 14:59:22 GMT
console.log(typeof myDate)//object

//declaring dates
//let createDate = new Date(2025, 11, 29)// Months are 0-indexed (0 is Jan)//Mon Dec 29 2025 00:00:00 GMT+0530 (India Standard Time)
//let createDate=new Date(2025, 11, 29, 9, 9)//Mon Dec 29 2025 09:09:00 GMT+0530 (India Standard Time)
// let createDate = new Date("2023-01-14") // YYYY-MM-DD
let createDate = new Date("01-14-2023") // MM-DD-YYYY
console.log(createDate.toLocaleDateString())

// Timestamps (useful for quizzes, polls)
let myTimeStamp = Date.now()

// console.log(myTimeStamp); // milliseconds since 1970
// console.log(createDate.getTime()); // milliseconds of the created date

// Convert to seconds (Interview Question)
// console.log(Math.floor(Date.now()/1000));

// Getting specific date parts
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // +1 because months start at 0
console.log(newDate.getDay()); // 1 is Monday, etc.

newDate.toLocaleDateString('default',{
    weekday:"long"
})