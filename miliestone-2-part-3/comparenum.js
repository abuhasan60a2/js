const prompt = require("prompt-sync")();
let x = parseInt(prompt("Enter first number: "));
let y = parseInt(prompt("Enter second number: "));
if(x>y){
    console.log(x+" is larger");
}
else if(x<y){
    console.log(x+" is smaller");
}
else{
    console.log("Both are equal");
}