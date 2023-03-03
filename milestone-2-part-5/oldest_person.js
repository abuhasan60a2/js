const prompt = require("prompt-sync")();
let n = parseInt(prompt("Number of persons: "));
let people = [];
for(let i = 0; i<n; i++){
    let name = prompt("Enter name: ");
    let age = parseInt(prompt("Enter age: "));
    let person = {name, age};
    people.push(person);
}
oldest = people[0];
for (let i = 1; i < n; i++) {
    if (people[i].age > oldest.age) {
      oldest = people[i];
    }
  }
console.log("oldest person is: "+oldest.name);

