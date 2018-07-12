export const USERS_LIST = 'users';
export const USER_DETAIL = 'users.detail';
export const USER_CREATE = 'users.create';

export const USER_ROUTE_ID_PARAM = 'id';

export default [
  {
    name: USERS_LIST,
    path: '/'
  },
  {
    name: USER_DETAIL,
    path: `users/:${USER_ROUTE_ID_PARAM}`
  },
  {
    name: USER_CREATE,
    path: '/create'
  }
];
