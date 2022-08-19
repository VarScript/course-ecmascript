var lastName = 'Fabio';
lastName = 'Henry';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

// Can't re assign values to const
const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
    if (true) {
    var fruit1 = 'Apple'; // Global scope
    let fruit2 = 'Kiwi'; // Block  scope
    const fruit3 = 'Banana'; // Bloke scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();