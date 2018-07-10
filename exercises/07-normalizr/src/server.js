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

app.get('/users', (req, res) => res.json(users));

app.post('/users', (req, res) => {
  const { firstName, lastName } = req.body;

  const regnalNumber = findRegnalNumber(users, firstName, lastName);
  const usersSkills = [];
  if (areStringsSame(firstName, 'arya') && areStringsSame(lastName, 'stark')) {
    usersSkills.push({
      skill: skills[0],
      level: 5 * regnalNumber
    });
  } else if (areStringsSame(firstName, 'daenerys') && areStringsSame(lastName, 'targaryen')) {
    usersSkills.push({
      skill: skills[1],
      level: 3 * regnalNumber
    });
  }

  const user = {
    id: `user-${users.length + 1}`,
    firstName,
    lastName,
    regnalNumber,
    skills: usersSkills
  };

  users.push(user);
  res.json(user);
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}!`));
