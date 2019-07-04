import { createActions } from 'reduxsauce'


const { Types, Creators } = createActions(
    {
        add: ['firstName', 'lastName'],
        loaded: ['users'],
    },
    {   
        prefix: "users/",
    }
)

export default { Types, Creators }