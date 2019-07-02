import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'modules/root/components/root';

const state = {
  title: "Amazing list of users",
  users: []
}

function addUser(firstName, lastName) {
  state.users = 
  [
    ...state.users,
    { id: state.users.length, firstName, lastName }
  ]
  render()
}

function render ()
{
  ReactDOM.render(
    <Root title={state.title} users={state.users} addUser={addUser} />,
    document.getElementById('root')
  );
}

render()