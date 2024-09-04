import User from '/javascript3.js'

const user = new User('Bob', 11)
console.log(user)
fetch('https://dog.ceo/api/breeds/image/random', {
    method: 'PUT',
    headers: {
        'Content-Type': 'applictatin/json'
    },
    body: Json.stringify(newUser)
}).then(res => {
    if (!res.ok) {
        console.log('Problem');
        return;
    }

    return res.json();
})
.then(data => {
    console.log('Success');
})
.catch(error => {
    console.log(error);
})