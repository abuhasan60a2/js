const prompt = require("prompt-sync")();
let age = parseInt(prompt("Enter your age: "));
if(age<18){
    console.log("You are not eligible to vote");
}
else{
    console.log("Your are eligible to vote");
}