import express from 'express'

import { User } from '../src/modules/users/user-types'

const port = 3001
const users: User[] = []

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/users', (_req, res) => res.json(users))

app.post('/users', (req, res) => {
  const { firstName, lastName } = req.body
  const user = {
    id: users.length + 1,
    firstName,
    lastName,
  }

  users.push(user)
  res.json(user)
})

app.listen(port, () => console.log(`The server is running on port ${port}!`))
