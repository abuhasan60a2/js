const prompt = require("prompt-sync")();
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  let x = prompt("Enter string: ");
  let y = reverseString(x);
  console.log(y);