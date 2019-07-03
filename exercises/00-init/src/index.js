import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

import Root from 'modules/root/components/root';
import rootReducer from 'modules/root/root-reducer'
import UsersActions from 'modules/users/users-actions'


const store = createStore(rootReducer,  
    window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : v => v
)

function dispatchAddUser(user)
{
  store.dispatch(UsersActions.Creators.addUser(user))
}

function render ()
{
  ReactDOM.render(
    <Root title={store.getState().users.title} users={store.getState().users} addUser={dispatchAddUser}/>,
    document.getElementById('root')
  );
}

store.subscribe(render)
render()