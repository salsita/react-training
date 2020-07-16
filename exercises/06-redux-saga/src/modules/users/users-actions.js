import { createActions } from 'reduxsauce';

export default createActions(
  {
    addUser: ['user'],
    usersLoaded: ['users']
  },
  { prefix: 'users/' }
);