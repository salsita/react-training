import { createActions } from 'reduxsauce'


const { Types, Creators } = createActions(
    {
        add: ['firstName', 'lastName'],
    },
    {   
        prefix: "users",
    }
)

export default { Types, Creators }