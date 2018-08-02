const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3001;

const areStringsSame = (a, b) => a.toLowerCase() === b.toLowerCase();

const hasSameName = (user, firstName, lastName) => areStringsSame(firstName, user.firstName) && areStringsSame(lastName, user.lastName);

const findRegnalNumber = (users, firstName, lastName) => {
  const regnalNumbers = users
    .filter(user => hasSameName(user, firstName, lastName))
    .map(({ regnalNumber }) => regnalNumber);

  if (regnalNumbers.length === 0) {
    return 1;
  }

  return Math.max(...regnalNumbers) + 1;
};

const skills = [{
  id: 'skill-1',
  name: 'Change my face'
}, {
  id: 'skill-2',
  name: 'Control dragons'
}];

const users = [];

const app = express();
app.use(bodyParser.json());

app.get('/users/:id', (req, res) => {
  const user = users.find(user => user.id === req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'No user found' });
  }
});

app.patch('/users/:id', (req, res) => {
  const { id, ...userData } = req.body;

  const userIndex = users.findIndex(user => user.id === req.params.id);

  if (userIndex === -1) {
    return res.status(400).json({ message: 'Wrong user id' });
  }

  users[userIndex] = {
    ...users[userIndex],
    ...userData
  };

  res.json(users[userIndex]);
});

app.get('/users', (req, res) => res.json(users));

app.post('/users', (req, res) => {
  const { firstName, lastName, skills } = req.body;

  const regnalNumber = findRegnalNumber(users, firstName, lastName);
  const user = {
    id: `user-${users.length + 1}`,
    firstName,
    lastName,
    regnalNumber,
    skills
  };

  users.push(user);
  res.json(user);
});

app.get('/skills', (req, res) => res.json(skills));

app.listen(PORT, () => console.log(`The server is running on port ${PORT}!`));
