import React, { useState } from 'react'
import { User, UserName } from '../user-types'

export const UserList: React.FC = () => {
  // Declare a new state variable called 'users'
  const [users, setUsers] = useState<User[]>([])

  // Adds a new user to the 'users' state
  const addUser = (user: UserName) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: prevUsers.length + 1, ...user },
    ])
  }

  return (
    <>
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
    </>
  )
}
