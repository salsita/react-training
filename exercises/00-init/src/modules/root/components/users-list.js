import React from 'react';
import PropTypes from 'prop-types';

const UsersList = (props) => (
    <div>
    <button onClick={ () => props.addUser( {firstName:'Arya', lastName:'Stark'} )}>Add Arya</button>
    <button onClick={ () => props.addUser( {firstName:'Daenerys', lastName:'Targaryen'} )}>Add Daenerys</button>
    <br/>
    {props.users.users.length === 0
        ? "No users" 
        : props.users.users.map( ({id, firstName, lastName}) => 
            <li key={id}>{firstName} {lastName}</li>)
    }
    </div>
)

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        firstName: PropTypes.string,
        lastName: PropTypes.string
      })),
      addUser: PropTypes.func
}

export default UsersList