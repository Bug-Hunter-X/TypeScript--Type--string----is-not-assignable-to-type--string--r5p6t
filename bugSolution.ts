function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(" ");
}

let user = ["Jane", "Doe"];
console.log(greeter(user[0])); // Corrected: Accessing the first element of the array
console.log(greeterArray(user)); // Corrected: Using a function that handles arrays