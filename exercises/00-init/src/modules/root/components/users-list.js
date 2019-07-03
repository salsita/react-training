import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UsersActions from 'modules/users/users-actions'

const UsersList = (props) => (
    <div>
    <button onClick={ () => props.addUser('Arya', 'Stark')}>Add Arya</button>
    <button onClick={ () => props.addUser('Daenerys', 'Targaryen')}>Add Daenerys</button>
    <br/>
    {props.users.length === 0
        ? "No users" 
        : props.users.map( ({id, firstName, lastName}) => 
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

const mapStateToProps = (state) => ({
    users: state.users.userList
});

const mapDispatchToProps = (dispatch) => ({
    addUser: (firstName, lastName) => dispatch(UsersActions.Creators.add(firstName, lastName))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)