import {ChangeEvent, Component, FC, useState} from "react";
import {JobTitle} from "../types/users";
import {useDispatch} from "react-redux";
import {addUser} from "../store/actions/userActions";

interface Props {
   onSave: (firstName: string, lastName: string, jobTitle: JobTitle, age: number) => void;
}

export const AddUserForm: FC<Props> = ({onSave}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [jobTitle, setJobTitle] = useState<JobTitle>(JobTitle.motherOfDragons)
    const [age, setAge] = useState(20);

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
        dispatch(addUser({
            id: Date.now(),
            firstName,
            lastName,
            jobTitle,
            age
        }))
        setFirstName('')
        setLastName('')
        setJobTitle(JobTitle.motherOfDragons)
        setAge(12)
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