// Declaring
class User {};

// const newUser = new User(); // instance the an class


class user {
    // Methods
    greeting() {
        return 'Hello';
    }
};

const vs = new user();
console.log(vs.greeting());
const fabio = new user();
console.log(vs.greeting());

/*
class plus {
   process() {
    if(true) {
        return 'Hello!';
    } else {
        return 'Sorry!';
    }
   }
}

const las = new plus;
console.log(las.process());
*/



// -- Builder

class user {
    // Builder
    constructor() {
        console.log('New user');
    }
    greeting() {
        return 'Hello';
    }
}

const henry = new user();


// -- this
class user {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
}

const vargas = new user('Vargas');
console.log(vargas.greeting());

//setters getters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Methods

    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name + ','} ${'your age is: ' + this.uAge}`
    }

    get uAge() {
        return this.age
    }
    set uAge(n) {
        this.age = n;
    }
}

const sanchez = new user('Sanchez', 21)
console.log(sanchez.greeting())
console.log(sanchez.uAge)
console.log(sanchez.uAge = 22)
console.log(sanchez.greeting())

