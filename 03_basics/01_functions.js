
// function sayMyName(){
//     console.log("r");
//     console.log("i");
//     console.log("j");
//     console.log("u");
//     }
    // sayMyName()

// function addTwoNumbers (number1, number2){         //(number1, number2)------ parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers (number1, number2){
   
    // let result = number1 + number2
    // console.log("swarnava");         // this will be printed bt after the result this will not printed
    // return result                   // after this return value, nothing is printed but if you write console before 
                                      // result then that will be printed 
    
    return number1 + number2                                                 
}


const result = addTwoNumbers(3,4)                  //(3,4)------- arguments

// console.log("result:", result );

function loginUserMssage (username = "sam") {
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMssage("swarnava"));
console.log(loginUserMssage("riju"));


 

// store a value inside a variable

function add (n1,n2){
    return n1+n2
}
const value =(3,4)
console.log("value:", result);

// rest operators

function cartPrice (...value){
    return value 
}
console.log(cartPrice(200,300,400));     // by usuing rest operators we get the value inside an array

const anything = {
    name: "swarnava",
    price: 299
}
function handleObject(anybody){
    console.log(`my name is ${anything.name} and price is ${anything.price}`);
}
handleObject(anything)


// function inside an array

const myArray = [100,200,300,400,500]
function returnSecondValue(getArray) {
    return getArray[1]
    
}
console.log(returnSecondValue(myArray));



// practice

const myArr = [3628,83728,837298,3852379]

function myThirdValue(getArr) {
    return getArr[2]
    
}
console.log(myThirdValue(myArr));

// practice

// const nothing = {
//     userName: "riju",
//     age: 19
// }
// function handleTheObject (user){
//     console.log(`my name is ${nothing.userName}, my age is${nothing.age}`);
// }
// handleTheObject(nothing)











// practice

function user (userName) {
    return `${userName} just logged in`
}
console.log(user ("swarnava"));

