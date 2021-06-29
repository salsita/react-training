import React, {useCallback, useState} from "react";
import {AddUser, SortAsc, SortLength, User} from "../../users/user-types";
import {useDispatch} from "react-redux";
import {addUser} from "../../../actions/userActions";

// State management with UseState function
// export const Input = (props: Props) => {
//     const [usersInput, setInput] = useState<string>("")
//     const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
//         const usersInputNew = event.target.value
//         setInput(usersInputNew)
//     }, [setInput]);
//
//     const handleButtonClick = useCallback((): void => {
//         props.addUser(usersInput)
//         setInput("")
//     }, [usersInput, setInput, props.addUser]);
//
//
//     return (
//         <div>
//             <input onInput={handleInputChange} value={usersInput}/>
//             <button onClick={handleButtonClick}>Save</button>
//         </div>
//     )
// }

export const Input = () => {
    const dispatch = useDispatch()
    const [usersInput, setInput] = useState<string>("")
    const handleButtonClick = useCallback((): void => {
        // Dispatch function: send actions to our rootReducer and rootReducer update our current state
        // Action createor produced object below
        dispatch(addUser(usersInput, Date.now()))
        setInput("")
    }, [usersInput, setInput]);


    return (
        <div>
            <input onChange={(event) => setInput(event.target.value)} value={usersInput}/>
            <button onClick={handleButtonClick}>Save</button>
        </div>
    )
}