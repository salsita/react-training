import React, {useCallback, useState, useEffect, ReactNode} from "react";
import {User} from "../../users/user-types";
import {useSelector} from "react-redux";
import {State} from "../../../store";
import {Link} from "react-router-dom";

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
    // Use effect wont return anything, Function will be called automatically when dependencies change
    // useEffect(() => {
    //     // called backend
    //     // GET request for remote image in node.js
    //     // then i use when i dont have async function, await in async function
    //     console.log("inside useEffect")
    //     // axios({
    //     //     method: 'get',
    //     //     url: 'http://localhost:7000/users',
    //     //     withCredentials: true,
    //     // })
    //     //     .then(function (response) {
    //     //         console.log(response)
    //     //     });

        // dispatched an action to set the state to the response
    // }, [])
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


  // this is a different change
    useEffect(() => {
        console.log('this is in the effect')
    }, [])

    return (
        <div>

            <table>
                <tr>
                    <th>Username</th>
                </tr>


                { /*Key attribute: Every element must have some unique key. (Only for list in parent component.)*/}
                {sortedUsersList.map(user => (<>
                    <tr key={user.username}>
                        <td>{user.username}</td>
                    </tr>
                        <Link to={`/edit/${user.id}`}>edit</Link>
                        {/* <Link to="/delete/:userId">edit</Link> */}
                    </>
                ))}

            </table>


        </div>
    )
}