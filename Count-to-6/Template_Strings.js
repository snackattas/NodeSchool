var person = process.argv[2];
var message = `Hello, ${person}!
Your name lowercased is "${person.toLowerCase()}".`;
console.log(message);
