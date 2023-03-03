const prompt = require("prompt-sync")()

let height = parseFloat(prompt("Enter height: "));
let width = parseFloat(prompt("Enter width: "));
let calc  = function (height, width){ //functional expression
    return height*width;
}
let area = calc(height, width);
console.log(area);