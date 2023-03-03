const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter size of the array: "));
let ara = []
for(let i = 0; i<n; i++){
    let x = parseInt(prompt());
    ara.push(x);
}
let max = ara.reduce((a,b)=> Math.max(a,b),-Infinity);
let min = ara.reduce((a,b)=> Math.min(a,b),Infinity);
console.log("max value is: " +max);
console.log("min value is: "+min);