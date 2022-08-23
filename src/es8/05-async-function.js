const fn = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async'), 2000)
        : reject(new Error('Error!'))
    })
}

const anFn = async () => {
    const something = await fn();
    console.log(something);
    console.log('Hi!');
    console.log('After');
}

console.log('Before');
anFn();
