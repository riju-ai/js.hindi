// const user = {
//     username : "swarnava",
//     age: 18,

//     welcomeMessage: function (){
//         console.log(`${this.username}, welcome to the website`);
//         console.log(this);
//     }
// }
// user.welcomeMessage()
// user.username = "riju"
// user.welcomeMessage()

// console.log(this);

const anything = () => ({username: "riju"})
console.log(anything());