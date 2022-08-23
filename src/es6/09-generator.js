
// Generator be identify with: *

function* iterate(array) {
    for (let value of array) { // <-- For each item of the array
        yield value; // Return each one of the values. yield is reserved word
    }
}

const it = iterate(['Fabio', 'Tatiana', 'Cristina', 'Maria']);
console.log(it.next().value);  // Fabio
console.log(it.next().value);  // Tatiana
console.log(it.next().value);  // Cristina
console.log(it.next().value);  // Maria
console.log(it.next().value);  // Undefine
console.log(it.next().value);  // Undefine