function newUser(name, age, country) {
    var  name = name || 'Fabio';
    var  age = age || 21;
    var  country = country || 'Colombia'
    console.log(name, age, country)
}

newUser();
newUser('Henry', 22, 'England');


// --


function newAdmin(name = 'Fabio', age = 21, country = 'COL') {
    console.log(name, age, country)
}

newAdmin();
newAdmin('Fabiolin', 28, 'Us');