import React from 'react';

class UsersList extends React.Component {
    constructor() {
        super();
        this.state = { 
            users : []
        }
    }

    render() {
        return <div>
            <button onClick={ () => this.addUser('Arya', 'Stark')}>Add Arya</button>
            <button onClick={ () => this.addUser('Daenerys', 'Targaryen')}>Add Daenerys</button>
            <br/>
            {this.state.users.length === 0 ? 
                "No users" :
                this.state.users.map( ({id, firstName, lastName}) => 
                    <li key={id}>{firstName} {lastName}</li>)
            }
        </div>
    }

    addUser(firstName, lastName) {
        this.setState( 
            {users: this.state.users.concat({id: this.state.users.length, firstName: firstName, lastName: lastName}) }
        )
    }
}

export default UsersList