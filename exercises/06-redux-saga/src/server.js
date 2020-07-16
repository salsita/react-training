const express = require('express');
const bodyParser = require('body-parser')

const PORT = 3001;
const users = [];

const app = express();
app.use(bodyParser.json());

app.get('/users', (req, res) => res.json(users));

app.post('/users', (req, res) => {
  const { firstName, lastName } = req.body;
  const user = {
    id: users.length + 1,
    firstName,
    lastName
  };

  users.push(user);
  res.json(user);
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}!`));
