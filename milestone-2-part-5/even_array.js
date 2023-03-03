const prompt = require("prompt-sync")();
function getEvenNumbers(numbers) {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
      }
    }
    return evenNumbers;
  }
  let n = parseInt(prompt("Array size: "));
  let numbers = [];
  for(let i = 0; i<n;i++){
    let x = parseInt(prompt());
    numbers.push(x);
  }
  let evenNumbers = getEvenNumbers(numbers);
  
  console.log(evenNumbers);
  