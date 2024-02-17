// // // Primitive

// // 7 types of Primitive datatypes are

// // String, Number, Boolean, Null, Undefined, Symbol, Bigint

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null       // null is null not 0 value
// let userEmail;                 // (undefined)

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log( id === anotherId);

// // const bigNumber = 365627562838659283n


// // Reference Non-Primitive datatypes are 

// // Array, Object, Functions

// const heros = ["shaktiman", "spiderman", "batman"]

// let myObj= {
//     name: "Swarnava",
//     age: 20,
// }

// const myFunction = function(){
//     console.log("hello world");
// }

// console.log(typeof myFunction);

// // console.log( typeof bigNumber );      // type of is used to know the datatype of the variable

// // console.log( typeof outsideTemp);



// Primitive datatypes:
// String - string
// Number - number
// Boolean - Boolean
// Null - object(****)
// Undefined - undefined
// BigInt - bigint

// Non-primitive datatypes:
// Array - object
// Function - function(object)
// Object - object

let ironMan = "tony"

let avanger = ironMan
avanger = "marvel"

console.log(ironMan);
console.log(avanger);

let userOne =
{
    email : "user@google.com",
    upi : "user@ybl"
    
}

let userTwo = userOne

userTwo.email = "Swarnava@google.com"

console.log(userOne.email);
console.log(userTwo.email);