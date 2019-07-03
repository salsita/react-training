

const ADD_USER = 'ADD_USER'

const addUser = (firstName, lastName) => ({
    type: ADD_USER,
    payload: {firstName, lastName}
})

export default {
    Types: {
      ADD_USER
    },
    Creators: {
        addUser
    }
  };