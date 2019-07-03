import { createActions } from 'reduxsauce'


const { Types, Creators } = createActions(
    {
        addUser: ['firstName', 'lastName'],
    },
    {   
        prefix: "users",
        namespace: "/"
    }
)

export default { Types, Creators }