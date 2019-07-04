import { call, fork, put, takeEvery } from 'redux-saga/effects';

import {getUsers as getUsersEffect, addUser as addUserEffect} from 'modules/users/users-effects'
import UsersActions from 'modules/users/users-actions'


function* getUsers() {
    yield alert(`getUsers saga called`)

    try {
        const users = yield call(getUsersEffect);
        yield put({ type: 'LOADED', payload: users });
    }
    catch (e)
    {
        yield alert(`getUsersSaga failed:${e}`)
    }
}

function* addUser(user) {
    yield alert(`AddUserSaga called, user:${JSON.stringify(user)}`)
    try {
        // yield call(addUserEffect, user.firstName, user.lastName)
        yield addUserEffect(user.firstName, user.lastName)
        yield alert(`addUserEffect called, about to call getUsers`)

        yield getUsers();
    }
    catch (e)
    {
        yield alert(`addUser failed:${e}`)
    }
}

function* usersSaga()
{
    yield fork(getUsers);
    yield takeEvery(UsersActions.Types.ADD, addUser);
    // ToDo: Catch errors
}

export default usersSaga