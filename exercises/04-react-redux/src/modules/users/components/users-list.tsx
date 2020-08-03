import React from 'react'

import { connect, ConnectedProps } from 'react-redux'

import { usersActions } from 'modules/users/users-slice'
import { RootState } from 'modules/root/root-reducer'

const mapStateToProps = (state: RootState) => ({
  users: state.users.users,
})

const mapDispatchToProps = {
  addUser: usersActions.addUser,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

// infer the props from Redux
type UserListPropsFromRedux = ConnectedProps<typeof connector>

export const UserList = connector(
  ({ users, addUser }: UserListPropsFromRedux) => (
    <div>
      <div>
        <button
          onClick={() => addUser({ firstName: 'Arya', lastName: 'Stark' })}
        >
          Add No One
        </button>
        <button
          onClick={() =>
            addUser({ firstName: 'Daenerys', lastName: 'Targaryen' })
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
    </div>
  )
)
