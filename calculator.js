const prompt = require("prompt-sync")();
function calculate(num1, num2, operation) {
    let result;
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operation.");
        return;
    }
    console.log(`Result: ${result}`);
  }
  while(true){
    let num1 = Number(prompt("Enter the first number:"));
    let num2 = Number(prompt("Enter the second number:"));
    let operation = prompt("Enter the operation (+, -, *, /):");
    calculate(num1, num2, operation);
    let x = prompt("Calculate again?(yes/no): ");
    if(x=="yes"){
        continue;
    }
    else if(x=="no"){
        console.log("thank you!")
        break;
    }
    else{
        console.log("please write yes/no correctly");
    }
  }
  
  
  
  