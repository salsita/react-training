import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { usersActions } from 'modules/users/users-slice'
import { RootState } from 'modules/root/root-reducer'
import { UserData } from '../user-types'

export const UserList: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.users)
  const dispatch = useDispatch()
  const dispatchAddUserAction = (user: UserData) =>
    dispatch(usersActions.addUser(user))

  return (
    <>
      <div>
        <button
          onClick={() =>
            dispatchAddUserAction({ firstName: 'Arya', lastName: 'Stark' })
          }
        >
          Add No One
        </button>
        <button
          onClick={() =>
            dispatchAddUserAction({
              firstName: 'Daenerys',
              lastName: 'Targaryen',
            })
          }
        >
          Add Mother of Dragons
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {!users.length && (
            <tr>
              <td colSpan={2}>No Users</td>
            </tr>
          )}
          {users.map(({ id, firstName, lastName }) => (
            <tr key={id}>
              <td>{firstName}</td>
              <td>{lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
