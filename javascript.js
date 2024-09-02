fetch("https://placebear.com", {
    method: 'POST',
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
    console.log(data.data[2].first_name);
})
.catch(error => {
    console.log(error;)
})