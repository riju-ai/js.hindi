var c = 300
let a = 300
if (true ){

    let a = 10
    var b = 20
    const c = 30
    console.log("inner:", a);
}

console.log(a);
console.log(b);
// console.log(c);


function one (){
    const username = "swarnava"

    function two (){
        const website = "youtube"
        console.log(website);
    }
    two()
    console.log(username);
}
one()