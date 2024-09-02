fetch("https://placebear.com", {
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