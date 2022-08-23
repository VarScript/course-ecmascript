// Arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring

let user = {username: 'fabio', age: 15};
let { username, age } = user;
console.log(username, user.age);


// spread operator - destructuring

let person = { name: 'Fabio', age: 28}
let country = 'COL';

let data = { id:1, ...person, country };
console.log(data);

// Rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3,);