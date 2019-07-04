const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json())

const users = [
    {
        id: 0,
        firstName: "Jon",
        lastName: "Snow"
    }
]

app.get('/users', function (req, res) {
    res.send(JSON.stringify(users))
})

app.post('/users', function (req, res) {
    console.log(`users endpoint received post request with body:${JSON.stringify(req.body)}`)
    users.push(
        {
            id: users.length,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }
    )
    // console.log(`users endpoint, users after post request:${JSON.stringify(users)}`)
    res.end()
})

app.listen(3001)