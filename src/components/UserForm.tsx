import {ChangeEvent, Component, FC, useState} from "react";
import {JobTitle, User} from "../types/users";
import {useDispatch} from "react-redux";
import {addUser} from "../store/actions/userActions";

interface Props {
   user?: User;
   onSubmit: (firstName: string, lastName: string, jobTitle: JobTitle, age: number) => void;
}

export const UserForm: FC<Props> = ({user, onSubmit}) => {
    const [firstName, setFirstName] = useState(user ? user.firstName : '')
    const [lastName, setLastName] = useState(user ? user.lastName : '')
    const [jobTitle, setJobTitle] = useState<JobTitle>(user ? user.jobTitle : JobTitle.motherOfDragons)
    const [age, setAge] = useState(user ? user.age : 20)

    const dispatch = useDispatch();

    const onFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value)
    };

    const onLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value)
    };

    const onJobTitleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setJobTitle(event.target.value as JobTitle)
    };

    const onAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const ageAsNumber = parseInt(event.target.value)
        if (isNaN(ageAsNumber)) return
        setAge(ageAsNumber)
    };

    const onButtonClick = () => {
        onSubmit(firstName, lastName, jobTitle, age)
        if (user == null) {
            setFirstName('')
            setLastName('')
            setJobTitle(JobTitle.motherOfDragons)
            setAge(20)

        }
    }

    return (
        <>
            <input type={"text"} onChange={onFirstNameChange} value={firstName} />
            <input type={"text"} onChange={onLastNameChange} value={lastName} />
            <select onChange={onJobTitleChange} value={jobTitle}>
                {Object
                    .values(JobTitle)
                    .map(title => <option key={title} value={title}>{title}</option>)}
            </select>
            <input type="number" onChange={onAgeChange} value={age} />
            <button onClick={onButtonClick}>Add John</button>
        </>
    );
}