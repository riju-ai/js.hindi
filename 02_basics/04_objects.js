// const tinderUser = new object ()  -------- singletonobject
const tinderUser = {}    // ------------- nonsingleton object

tinderUser.id = "123ab"
tinderUser.name = "Pratap"
tinderUser.isLoggedIn = false

//  console.log(tinderUser);

const regularser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Swarnava",
            lastname: "Dhabal"
        }

    }
}
// console.log(regularser.fullname.userfullname.firstname);

const obj1 = { 1:"A" , 2:"B"}
const obj2 = { 3:"C" , 4:"D"}


// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2}   //   -------- Spread Operator
// console.log(obj3);

// when the value came form databse

const user = [
    {
        id: 1,
        email: "swarnava@gmail.com"
    },
    {
        id: 1,
        email: "swarnava@gmail.com"
    },
    {
        id: 1,
        email: "swarnava@gmail.com"
    }
]
user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "Hitesh"
}
const {courseinstructor: instructor} = course

// console.log(courseinstructor);
console.log(instructor);

// json

// {
//     name: "riju",
//     coursename: "js in hindi",
//     price: "free"
// }

[
    {},
    {},
    {}
]