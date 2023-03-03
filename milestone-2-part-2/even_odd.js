const prompt = require("prompt-sync")();
let x =parseInt(prompt("Enter the number: "));
if(x%2==0){
    console.log("number even");
}
else{
    console.log("number is odd");
}