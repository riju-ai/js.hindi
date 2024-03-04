// Singleton
// Object.creat      -   constractor method

// object literals


const mysym = Symbol("key1")


const JsUser= { 
    name: "swarnava",
    "full name": "Swarnava Dhabal",
    [mysym]: "mykey1",
    age: 20,
    location: "kolkata",
    email: "swarnava@google.com",
    isLoggdin: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

JsUser.email = "swarnava@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "swarnava@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());