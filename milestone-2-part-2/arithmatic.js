const prompt = require("prompt-sync")();
let x = prompt("Enter first number: ");
let  y = prompt("Enter second number; ");
console.log("addition: "+ (x+y));
console.log("subtraction: "+(x-y));
console.log("multiplication: ", +(x*y));
if(y!=0){
    console.log("division: "+(x/y));
}
else{
    console.log("Math error");
}