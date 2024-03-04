
// function sayMyName(){
//     console.log("r");
//     console.log("i");
//     console.log("j");
//     console.log("u");
//     }
    // sayMyName()

// function addTwoNumbers (number1, number2){         //(......)------ parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers (number1, number2){
   
    // let result = number1 + number2
    // console.log("swarnava");         // this will be printed bt after the result this will not printed
    // return result                   // after this result nothing is printed but if you write console before 
                                      // result then that will be printed 
    
    return number1 + number2                                                 
}


const result = addTwoNumbers(3,4)                  //(.....)------- arguments

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