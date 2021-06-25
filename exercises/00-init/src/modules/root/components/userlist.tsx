import React, {useCallback, useState} from "react";
import {AddUser, User} from "../../users/user-types";
import {useSelector} from "react-redux";
import {State} from "../../../store";

//
// export const UserList = (props: Probs) => {
//
//
//     return (
//         <div>
//             <button onClick={() => {props.addUser("Arya", "Stark", 1)}}>Add no One</button>
//             <button onClick={() => {props.addUser("Daenerys", "Targaryan", 2)}}>Add Mother of Dragons</button>
//             <table>
//                 <tr>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                 </tr>
//
//
//                 { /*Key attribute: Every element must have some unique key. (Only for list in parent component.)*/}
//                 {props.users.map(user => (
//                     <tr key={user.firstName + user.lastName}>
//                         <td>{user.firstName}</td>
//                         <td>{user.lastName}</td>
//                     </tr>
//                 ))}
//
//         </table>
//         </div>
// )
// }
//
// export interface ProbsUserList {
//     users: UserList[]
//     addUser: AddUserList
// }

export const UserList = () => {
    const state = useSelector((state: State) => state);
    const sortedUsersList= useSelector((state: State) => {
        const {usersList, sortType} = state;
        const newUsersList = [
            ...usersList
        ]

        if (sortType === "a-z") {
            newUsersList.sort((a: User, b: User) => a.username.localeCompare(b.username))
        }

        if (sortType === "length") {
            newUsersList.sort((a: User, b: User) => a.username.length - b.username.length)
        }

        return newUsersList
    })

    console.log(state)
    return (
        <div>

            <table>
                <tr>
                    <th>Username</th>
                </tr>


                { /*Key attribute: Every element must have some unique key. (Only for list in parent component.)*/}
                {sortedUsersList.map(user => (
                    <tr key={user.username}>
                        <td>{user.username}</td>
                    </tr>
                ))}

            </table>

        </div>
    )
}