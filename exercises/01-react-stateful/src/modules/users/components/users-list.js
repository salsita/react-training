import React from 'react';

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  addUser = user => {
    const { users } = this.state;

    this.setState({
      users: [
        ...users,
        {
          id: users.length + 1,
          ...user
        }
      ]
    });
  };

  addArya = () => this.addUser({ firstName: 'Arya', lastName: 'Stark' });
  addDaenerys = () => this.addUser({ firstName: 'Daenerys', lastName: 'Targaryen' });

  render() {
    const { users } = this.state;

    return (
      <div>
        <div>
          <button onClick={this.addArya}>Add No One</button>
          <button onClick={this.addDaenerys}>Add Mother of Dragons</button>
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
              <tr colSpan="2">
                <td>No Users</td>
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
    );
  }
}

export default UsersList;
