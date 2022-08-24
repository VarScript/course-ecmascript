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
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'))
