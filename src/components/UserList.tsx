import {ChangeEvent, Component, FC, useState} from "react";
import {User} from "../types/users";

interface Props {
    users: User[]
}

export const UserList: FC<Props> = ({ users }) => {
    return (
        <ul>
            {users.map(user => <li key={user.firstName}>{user.firstName}, {user.lastName}, {user.jobTitle}, {user.age}</li>)}
        </ul>
    )
}