import {ChangeEvent, Component, FC, useState} from "react";
import {User} from "../types/users";
import {useDispatch, useSelector} from "react-redux";
import {UserState} from "../store/reducers/userReducer";
import {deleteUser} from "../store/actions/userActions";

interface Props {
    users: User[]
}

export const UserList: FC = () => {
    const dispatch = useDispatch()
    const users = useSelector((state: UserState) => state.users)

    return (
        <ul>
            {users.map(user => <li key={user.firstName}>{user.firstName} {user.lastName}, {user.jobTitle}, {user.age} <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button></li>)}
        </ul>
    )
}