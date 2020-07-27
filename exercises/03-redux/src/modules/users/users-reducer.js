import UsersActions from 'modules/users/users-actions';

const INITIAL_STATE = {
  title: 'User Management',
  users: [],
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UsersActions.Types.ADD_USER:
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: state.users.length + 1,
            ...payload
          }
        ]
      };
    default:
      return state;
  }
};
