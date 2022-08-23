// Enhanced object literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId,
    }
}

console.log(newUser('VarScrip', 21, 'COL', 0));