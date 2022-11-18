// const a = 18;
// const b = 12;

// if ( a> b) {
//     console.log("A is greater");

// }
// else {
//     console.log("B is greater");
// }

// intialise
//condition
//intialiser

// try {
//     if ( a> b){
//         console.log("A is greater");
//     }else{
//          throw new Error('b is greater')
//     }

// }catch (err){

// }

// const a="10";
// function square (x){
//     return x*x;
// }

// console.log(square (10));
const Quote = require("inspirational-quotes");
const cowText = Quote.getQuote(); // returns quote (text and author)
console.log(Quote.getQuote({ author: false }));
console.log(Quote.getRandomQuote());

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: cowText.text,
    e: "💙 ",
    T: "b",
  })
);
