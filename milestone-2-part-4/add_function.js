const prompt = require("prompt-sync")();
function add(num1, num2) {
    return num1 + num2;
}
let x  = parseFloat(prompt("Enter first number: "));
let y = parseFloat(prompt("Enter second number: "));
let sum = add(x,y);
console.log("Summation is: "+sum);