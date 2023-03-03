const prompt = require("prompt-sync")();
let n = parseInt(prompt("number of strings: "));
let ara = []
for(let i = 0; i<n; i++){
    let s = prompt("Enter string: ");
    ara.push(s);
}
let longest = ara[0];
let shortest = ara[0];

for (let i = 1; i < ara.length; i++) {
  if (ara[i].length > longest.length) {
    longest = ara[i];
  }
  if (ara[i].length < shortest.length) {
    shortest = ara[i];
  }
}

console.log("Longest string: " + longest);
console.log("Shortest string: " + shortest);