const setUsers = model => proposal => {
    if (proposal.users) {
        model.users = proposal.users;
    }
};

const setLastAddedUser = model => proposal => {
    if (proposal.lastAddedUser) {
        model.lastAddedUser = proposal.lastAddedUser;
    }
};

const reset = model => () => {
    model.lastAddedUser = null;
};

export default {
    reset,
    setUsers,
    setLastAddedUser
};
