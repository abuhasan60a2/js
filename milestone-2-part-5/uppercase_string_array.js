const prompt = require("prompt-sync")();
function getUpperCaseStrings(strings) {
    let upperCaseStrings = [];
    for (let i = 0; i < strings.length; i++) {
      let upperCaseString = strings[i].toUpperCase();
      upperCaseStrings.push(upperCaseString);
    }
    return upperCaseStrings;
  }
  
let n = parseInt(prompt("number of strings: "));
let ara = []
for(let i = 0; i<n; i++){
    let s = prompt("Enter string: ");
    ara.push(s);
}
let uppercase = getUpperCaseStrings(ara);
console.log(uppercase);