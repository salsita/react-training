import { createActions } from 'reduxsauce';

export default createActions(
  {
    addUser: ['user']
  },
  { prefix: 'users/' }
);
