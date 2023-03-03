const prompt = require("prompt-sync")();
function arasum(ara, size){
    let sum = 0;
    for(let i = 0; i<size; i++){
        sum += ara[i];
    }
    return sum;
}
let n = parseInt(prompt("Enter size of array: "));
let ara = [];
for(let i = 0; i<n; i++){
    let x = parseInt(prompt())
    ara.push(x);
}
let sum = arasum(ara, n);
console.log(sum);
