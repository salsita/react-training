import {FC} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {UserState} from "../../store/reducers/userReducer";
import {UserForm} from "../UserForm";
import {JobTitle} from "../../types/users";
import {editUser} from "../../store/actions/userActions";

interface EditPageParams {
    userId: string
}

export const EditPage: FC = () => {
    const params = useParams<EditPageParams>();
    const dispatch = useDispatch();
    const user = useSelector((state: UserState) => {
        console.log(state, params.userId, `<- state, params.userId`)
        return state.users.find(user => user.id === Number(params.userId))
    })

    const onSave = (firstName: string, lastName: string, jobTitle: JobTitle, age: number) => {
        if (user == null) return;

        dispatch(editUser(user.id, {
            id: user.id,
            firstName,
            lastName,
            jobTitle,
            age
        }))
    }
    

    return (
        user ? (
            <>
                <h1>Edit for {user.firstName} {user.lastName}</h1>
                <UserForm user={user} onSubmit={onSave} />
            </>
        ) : (
            <h1>Not Found</h1>
        )
    );
}