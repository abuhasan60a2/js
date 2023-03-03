const prompt = require("prompt-sync")();
function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
let x = parseInt(prompt("Enter number: "));
if(isPrime(x)){
    console.log("number is prime");
}
else{
    console.log("number is not prime");
}
  