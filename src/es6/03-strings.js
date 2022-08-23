// Template literals. allow us concatenate strings 


// Before ES6
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!' ;
// console.log(epicPhrase);

// After ES6 - template literals
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2); 


// Multi line strings

let lorem = 'this is a string \n' + 'this is other line';

let lorem2 = `This is a epic phrase
 the continuation of that epic phrase.
 `;

console.log(lorem);
console.log(lorem2);
