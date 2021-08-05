import React, {Component, FC, useCallback} from "react";
import {Header} from "../Header";
import {UserForm} from "../UserForm";
import {UserList} from "../UserList";
import axios, {AxiosResponse} from "axios";
import {BackendUser, backendUserToUser, User} from "../../types/users";
import {addUser} from "../../store/actions/userActions";
import {useDispatch} from "react-redux";

export const UsersPage: FC = () => {
    const dispatch = useDispatch();

    // callback to be fired when the user submits the User Form.  We're going to
    // add a new user, since we're using UserForm for creating a new user here
    const onNewUserSave = useCallback((firstName, lastName, jobTitle, age) => {
        axios({
            method: 'post',
            url: 'http://localhost:7000/user',
            data: {
                firstName,
                lastName,
                jobTitle,
                age
            }
        }).then((response: AxiosResponse<BackendUser>) => {
            const backendUser: BackendUser = response.data
            const user = backendUserToUser(backendUser)
            dispatch(addUser(user))
        })
    }, [axios, dispatch, backendUserToUser]);
    // all functions / vars from outside this useCallback should be in this
    // dependencies list above ^^^

    return (
        <>
            <Header text={'User Management'} />
            <h2>Create New User</h2>
            <UserForm onSubmit={onNewUserSave} />
            <UserList />
        </>
    )
}