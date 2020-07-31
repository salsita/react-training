import React from 'react'

import { connect } from 'react-redux'

import { UsersActions } from 'modules/users/users-slice'
import { User, AddUser } from '../user-types'

interface UserListProps {
  users: User[]
  addUser: AddUser
}

const mapStateToProps = (state) => ({
  users: state.users.users,
})

const mapDispatchToProps = {
  addUser: UsersActions.addUser,
}

export const UserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ users, addUser }: UserListProps) => (
  <div>
    <div>
      <button onClick={() => addUser({ firstName: 'Arya', lastName: 'Stark' })}>
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
))
