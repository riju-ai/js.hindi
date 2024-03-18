//           IIFE (Immediately Invoked Function)



// (function chai (){
//     console.log(`DB connected`);
// })
// ()


(function chai(){
    console.log(`DB Connected`);
}) ();

((name) => {
console.log(`DB Connected 2 ${name}`);})
("riju");




(function chai (){
    console.log(`bad boy`);
})();

((username)=>{
    console.log(`bad boy 2 ${username}`);
})("riju")