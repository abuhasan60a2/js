const prompt = require("prompt-sync")();
switch(prompt("Enter your grade: ")){
    case "A":
        console.log("GPA 4.00");
        break;
    case "B":
        console.log("GPA 3.00");
        break;
    case "C":
        console.log("GPA 2.00");
        break;
    case "D":
        console.log("GPA 1.00");
    default:
        console.log("Failure stoobid!");
}