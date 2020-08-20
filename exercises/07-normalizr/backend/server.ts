import express from 'express'

import { isUserName } from './utils'
import { addUser, userList } from './user-store'

const port = 3001

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/users', (_, res) => res.json(userList))

app.post('/users', (req, res) => {
  const userName = req.body

  if (!isUserName(userName)) {
    res.status(400).json({ message: 'Invalid user name' })
    return
  }

  const user = addUser(userName)
  res.json(user)
})

app.listen(port, () => console.log(`The server is running on port ${port}!`))
