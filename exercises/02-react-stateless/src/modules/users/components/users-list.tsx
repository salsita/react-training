import React from 'react'
import { User, AddUserFunc } from '../users-types'

interface UsersListProps {
  users: Array<User>
  addUser: AddUserFunc
}

export const UsersList: React.FC<UsersListProps> = ({ users, addUser }) => (
  <>
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
  </>
)
