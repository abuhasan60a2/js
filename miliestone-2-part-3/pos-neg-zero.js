const prompt = require("prompt-sync")();
let x = parseInt(prompt("Enter your number: "));

if(x>0){
    prompt(x+" is positive");
    console.log(typeof(x));
}
else if(x<0){
    prompt(x+" is negative");
}
else{
    prompt(" value is zero");
}
