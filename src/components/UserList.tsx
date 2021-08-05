import {ChangeEvent, Component, FC, useEffect, useMemo, useState} from "react";
import {BackendUser, backendUserToUser, User} from "../types/users";
import {useDispatch, useSelector} from "react-redux";
import {UserState} from "../store/reducers/userReducer";
import {deleteUser, setUsers} from "../store/actions/userActions";
import axios from "axios";
import {useHistory} from "react-router-dom";

export const UserList: FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    // get the list of users out of redux
    const users = useSelector((state: UserState) => state.users)

    // This is used for keeping track of what has been entered in the search
    // input.  Used in the useMemo below for filtering down the list of users
    const [searchTerm, setSearchTerm] = useState('');

   const filteredUsers = useMemo(() => {
      return users.filter(user => user.firstName.toLowerCase().includes(searchTerm.toLowerCase()));
   }, [users, searchTerm])

    return (
        <div>
            <h3>Search</h3>
            <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder={'Search here'} />
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Job Title</th>
                    <th>Age</th>
                </tr>
                {filteredUsers.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{`${user.firstName} ${user.lastName}`}</td>
                        <td>{user.jobTitle}</td>
                        <td>{user.age}</td>
                        <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                        <button onClick={() => {history.push(`/user/${user.id}`)}}>Edit</button>
                    </tr>
                ))}
            </table>
        </div>
    )
}