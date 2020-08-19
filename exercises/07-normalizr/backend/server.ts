import express from 'express'

import { User, UserData } from '../src/modules/users/user-types'
import { computeRegnalNumber, hasSameName } from './utils'

const port = 3001

const skills = [
  {
    id: 'skill-1',
    name: 'Change my face',
  },
  {
    id: 'skill-2',
    name: 'Control dragons',
  },
]

const recognizedUsers: { [key: string]: UserData } = {
  AryaStark: { firstName: 'Arya', lastName: 'Stark' },
  DaenerysTargaryen: { firstName: 'Daenerys', lastName: 'Targaryen' },
}

const users: User[] = []

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/users', (_, res) => res.json(users))

app.post('/users', (req, res) => {
  const userName: UserData = req.body

  const regnalNumber = computeRegnalNumber(users, userName)
  const usersSkills = []
  if (hasSameName(userName, recognizedUsers.AryaStark)) {
    usersSkills.push({
      skill: skills[0],
      level: 5 * regnalNumber,
    })
  } else if (hasSameName(userName, recognizedUsers.DaenerysTargaryen)) {
    usersSkills.push({
      skill: skills[1],
      level: 3 * regnalNumber,
    })
  }

  const user = {
    id: `user-${users.length + 1}`,
    ...userName,
    regnalNumber,
    skills: usersSkills,
  }

  users.push(user)
  res.json(user)
})

app.listen(port, () => console.log(`The server is running on port ${port}!`))