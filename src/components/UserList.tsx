import {ChangeEvent, Component, FC, useState} from "react";
import {User} from "../types/users";
import {useSelector} from "react-redux";
import {UserState} from "../store/reducers/userReducer";

interface Props {
    users: User[]
}

export const UserList: FC = () => {
    const users = useSelector((state: UserState) => state.users)
    return (
        <ul>
            {users.map(user => <li key={user.firstName}>{user.firstName} {user.lastName}, {user.jobTitle}, {user.age} <button>Delete</button></li>)}
        </ul>
    )
}