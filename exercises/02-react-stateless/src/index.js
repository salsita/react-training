import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'modules/root/components/root';

let state = {
  title: 'React is the best',
  users: []
};

const addUser = user => {
  const { users } = state;

  state = {
    ...state,
    users: [
      ...users,
      {
        id: users.length + 1,
        ...user
      }
    ]
  };

  render();
};

const render = () =>
  ReactDOM.render(
    <Root title={state.title} users={state.users} addUser={addUser} />,
    document.getElementById('root')
  );

render();
