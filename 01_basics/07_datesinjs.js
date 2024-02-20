// dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatDate = new Date  (2023, 0, 23)
// console.log(myCreatDate.toDateString());

// let myCreatDate = new Date  (2023, 0, 23, 9, 3)
// let myCreatDate = new Date ("01, 11, 2024")

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

let myTimeStamp = Date.now()
// console.log(math.floor(Date.now()/1000));   // divide by 1000 for getting the value in second and math.floor for getting not getting the decimel values

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday :  "long",
 
})