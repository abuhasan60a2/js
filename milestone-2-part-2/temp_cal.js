const prompt = require("prompt-sync")();
let temp = prompt("Enter temparature(Fahrenheit): ");
let celcius = 5*(temp-32)/9;
console.log("Temparature in celcius: "+celcius);