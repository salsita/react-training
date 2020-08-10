import express from 'express'

import { User, UserData } from '../src/modules/users/user-types'

const port = 3001

const areStringsSame = (a: string, b: string): boolean =>
  a.toLowerCase() === b.toLowerCase()

const hasSameName = (
  user: UserData,
  firstName: string,
  lastName: string
): boolean =>
  areStringsSame(firstName, user.firstName) &&
  areStringsSame(lastName, user.lastName)

const findRegnalNumber = (users: User[], userName: UserData) => {
  const regnalNumbers = users
    .filter((user) => hasSameName(user, userName.firstName, userName.lastName))
    .map(({ regnalNumber }) => regnalNumber)

  if (regnalNumbers.length === 0) {
    return 1
  }

  return Math.max(...regnalNumbers) + 1
}

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

const users: User[] = []

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/users', (_req, res) => res.json(users))

app.post('/users', (req, res) => {
  const userName: UserData = req.body

  const regnalNumber = findRegnalNumber(users, userName)
  const usersSkills = []
  if (hasSameName(userName, 'arya', 'stark')) {
    usersSkills.push({
      skill: skills[0],
      level: 5 * regnalNumber,
    })
  } else if (hasSameName(userName, 'daenerys', 'targaryen')) {
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
