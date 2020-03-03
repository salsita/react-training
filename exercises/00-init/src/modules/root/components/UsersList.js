import React from "react";
import PropTypes from "prop-types";

const Arya = {
    firstName: "Arya",
    lastName: "Stark"
};

const Daenerys = {
    firstName: "Daenerys",
    lastName: "Targaryen"
};

export const UsersList = props => {
    const userViews = props.users.map(user => (
        <li key={user.id}>{`${user.firstName} ${user.lastName}`}</li>
    ));
    const userList = userViews.length ? <ul>{userViews}</ul> : "No Users";
    const addArya = () => props.addUser(Arya);
    const addDaenerys = () => props.addUser(Daenerys);
    console.log("rendered UsersList");
    return (
        <div>
            {userList}
            <button onClick={addArya}>{`Add ${Arya.firstName}`}</button>
            <button onClick={addDaenerys}>{`Add ${Daenerys.firstName}`}</button>
        </div>
    );
};

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number,
        firstName: PropTypes.string,
        lastName: PropTypes.string
    })),
    addUser: PropTypes.func
};
