const name = "Swarnava"
const age = 20

console.log(`my mane is ${name}, and my age is ${age}`);

const bookName = new String ('Harry-Potter')

// console.log(bookName[0]);
// console.log(bookName.__proto__);

// console.log(bookName.length);
// console.log(bookName.toLowerCase());

// console.log(bookName.charAt(2));
// console.log(bookName.indexOf('t'));

const newString = bookName.substring (0,5)
console.log(newString);

const anothrtString = bookName.slice (-6,4)
console.log(anothrtString);

const newStringOne = "    swarnava      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://swarnava.com/swarnava%20dhabal"
console.log(url.replace('%20', '-'));

