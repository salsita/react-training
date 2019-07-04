import { call, fork, put, takeEvery } from 'redux-saga/effects';

import {getUsers as getUsersEffect, addUser as addUserEffect} from 'modules/users/users-effects'
import UsersActions from 'modules/users/users-actions'


function* getUsers() {
    try {
        const users = yield call(getUsersEffect);
        yield put({ type: UsersActions.Types.LOADED, payload: users });
    }
    catch (e)
    {
        console.log(`getUsers Saga failed:${e}`)
    }
}

function* addUser(user) {
    try {
        yield call(addUserEffect, user.firstName, user.lastName)
        yield getUsers();
    }
    catch (e)
    {
        console.log(`addUser Saga failed:${e}`)
    }
}

function* usersSaga()
{
    yield fork(getUsers);
    yield takeEvery(UsersActions.Types.ADD, addUser);
}

export default usersSaga