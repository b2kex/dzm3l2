
// fetch('http://localhost:3000/cards')
// .then(res=> res.json())
// .then(res => console.log(res))
 

// fetch('http://localhost:3000/cards', {
//     method: 'POST',
//     headers: {
//         'Content-Type': "application/json"
//     },
//    body: JSON.stringify({
//     "username": "fqwf",
//     "user_password": "qwfqwf",
//     "id": 7
//    }) 
//    .then(res => alert('good', res))
//    .catch(err => alert ('bad', err))
// })

let form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/cards', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            title: e.target[0].value,
            username: e.target[1].value,
            userpassword: e.target[2].value

        })
    }).then((res) => console.log(res))
    .catch((err) => console.log(err))
})