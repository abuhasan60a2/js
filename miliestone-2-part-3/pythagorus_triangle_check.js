const prompt = require("prompt-sync")();
let x = parseInt(prompt("Enter first number: "));
let  y = parseInt(prompt("Enter second number: "));
let z = parseInt(prompt("Enter third number: "));
let xx = x*x;
let yy = y*y;
let zz = z*z;
let sumx = yy+zz;
let sumy = xx+zz;
let sumz = xx+yy;
if(xx==sumx || yy==sumy || zz == sumz){
    console.log("They form pythagorean triangle");
}
else{
    console.log("They dont form pythagorean triangle");
}