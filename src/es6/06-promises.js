// The promises resolve the function of work with the callback. 
// Promise: something that is going to happen. went? today, tomorrow or never...

//logic

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Yeah!');
        } else {
            reject('Whops!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));


    