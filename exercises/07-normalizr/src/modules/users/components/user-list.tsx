import React, { useCallback } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { usersActions } from 'modules/users/users-slice'
import { getUserList } from '../users-selectors'
import { MemoButton } from './memo-button'

export const UserList: React.FC = () => {
  const users = useSelector(getUserList)
  const dispatch = useDispatch()

  const addAryaCallback = useCallback(
    () =>
      dispatch(usersActions.addUser({ firstName: 'Arya', lastName: 'Stark' })),
    [dispatch]
  )

  const addDaenerysCallback = useCallback(
    () =>
      dispatch(
        usersActions.addUser({ firstName: 'Daenerys', lastName: 'Targaryen' })
      ),
    [dispatch]
  )

  return (
    <>
      <div>
        <MemoButton onClick={addAryaCallback}>Add No One</MemoButton>
        <MemoButton onClick={addDaenerysCallback}>
          Add Mother of Dragons
        </MemoButton>
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
