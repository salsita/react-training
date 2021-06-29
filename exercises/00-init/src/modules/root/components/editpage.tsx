import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser, editUser} from "../../../actions/userActions";
import NumericInput from 'react-numeric-input';
import {State} from "../../../store";
import {useParams} from "react-router";
import {User} from "../../users/user-types";
import {Link} from "react-router-dom";


// user information from redux
// Make a new redux action for updating
// user only have an username and we need to add eye color, height
// postman, postgres, react redux, axios... etc.
export const EditPage = () => {
    const dispatch = useDispatch()

    const {userId} = useParams() as {userId: string};
    const user = useSelector((state: State) => {
        const {usersList, sortType} = state
        // ! this means this is not undefined and it will be there, only when we are totally sure that value will be there
        return usersList.find((u: User) => u.id === Number(userId))!
    })
    // We can use casting

    const [usersInputUsername, setInputUsername] = useState<string>(user.username)
    const [usersInputEyeColor, setInputEyeColor] = useState<string | undefined>(user.eyeColor)
    const [usersInputHeight, setInputHeight] = useState<number | undefined>(user.height)

    const handleButtonClick = useCallback((): void => {
        // Dispatch function: send actions to our rootReducer and rootReducer update our current state
        // Action createor produced object below
        dispatch(editUser(Number(userId),usersInputUsername, usersInputEyeColor, usersInputHeight))

    }, [usersInputUsername,usersInputHeight,usersInputEyeColor, setInputUsername, setInputEyeColor, setInputHeight]);

    return (
        <div>
            <Link to="/">back</Link>
            <label>username:
                <input onChange={(event) => setInputUsername(event.target.value)} value={usersInputUsername}/>
            </label>
            <label>eye color:
                <input onChange={(event) => setInputEyeColor(event.target.value)} value={usersInputEyeColor}/>
            </label>
            <label>height:
                {/* This means that type can be event or 0. */}
                <NumericInput onChange={(event) => setInputHeight(event || 0)} value={usersInputHeight}/>
            </label>
            <button onClick={handleButtonClick}>Save</button>
        </div>
    )
}