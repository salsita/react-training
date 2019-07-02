import React from 'react';
import PropTypes from 'prop-types';

function UsersList (props) {
        return <div>
            <button onClick={ () => props.addUser('Arya', 'Stark')}>Add Arya</button>
            <button onClick={ () => props.addUser('Daenerys', 'Targaryen')}>Add Daenerys</button>
            <br/>
            {props.users.length === 0 ? 
                "No users" :
                props.users.map( ({id, firstName, lastName}) => 
                    <li key={id}>{firstName} {lastName}</li>)
            }
        </div>
}

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        firstName: PropTypes.string,
        lastName: PropTypes.string
      })),
      addUser: PropTypes.func
}

export default UsersList