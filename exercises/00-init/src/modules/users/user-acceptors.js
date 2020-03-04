const setUsers = model => proposal => {
    if (proposal.users) {
        model.users = proposal.users
    }
};

export default {
    setUsers
};
