const user = { username: 'vs', age: 21, country: 'COL'};
const { username, ...values } = user;
console.log(username);
console.log(values);