import { createActions } from 'reduxsauce';

export default createActions(
  {
    addUser: ['user'],
    usersLoaded: ['userIds']
  },
  { prefix: 'users/' }
);