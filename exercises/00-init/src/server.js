const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json())

const users = [
]

app.get('/users', function (req, res) {
    res.send(JSON.stringify(users))
})

app.post('/users', function (req, res) {
    users.push(
        {
            id: users.length,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }
    )
    res.end()
})

app.listen(3001)