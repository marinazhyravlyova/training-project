import { call, put, takeEvery } from 'redux-saga/effects';

import { signInSuccess } from '../actions/authorisation'
import { calculateDailyRate } from '../utils/calories';

function postData (url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
}

function* signInSaga(action) {
    const { onSuccess, userData } = action.payload;

    try {
        const response = yield call(postData, 'http://localhost:3000/user/sign-in', userData);
        const user = yield response.json();
        yield put(signInSuccess(user));

        yield call(onSuccess);
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* signUpSaga(action) {
    try {
        const dailyRate = calculateDailyRate(action.payload);
        yield call(postData, 'http://localhost:3000/user/sign-up', { ...action.payload, dailyRate});
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* authorizeSaga(action) {
    try {
        const response = yield call(postData, 'http://localhost:3000/user/authorize', { token: action.payload });
        const user = yield response.json();
        yield put(signInSuccess(user));
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* authSaga() {
    yield takeEvery("USER_SIGN_IN_REQUESTED", signInSaga);
    yield takeEvery("USER_SIGN_UP_REQUESTED", signUpSaga);
    yield takeEvery("USER_AUTHORIZE", authorizeSaga);
}

export default authSaga;
