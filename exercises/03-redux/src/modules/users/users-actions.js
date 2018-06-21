const ADD_USER = 'ADD_USER';

const addUser = user => ({ type: ADD_USER, payload: user });

export default {
  Types: {
    ADD_USER
  },
  Creators: {
    addUser
  }
};
