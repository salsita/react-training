import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { usersActions } from 'modules/users/users-slice'
import { UserData } from '../user-types'
import { getUserList } from '../users-selectors'

export const UserList: React.FC = () => {
  const users = useSelector(getUserList)
  const dispatch = useDispatch()
  const addUser = (user: UserData) => () => dispatch(usersActions.addUser(user))

  return (
    <>
      <div>
        <button onClick={addUser({ firstName: 'Arya', lastName: 'Stark' })}>
          Add No One
        </button>
        <button
          onClick={addUser({ firstName: 'Daenerys', lastName: 'Targaryen' })}
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
          {users.map(({ id, firstName, lastName, regnalNumber }) => (
            <tr key={id}>
              <td>
                {firstName} {regnalNumber}
              </td>
              <td>{lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
