import {all} from 'redux-saga/effects';
import imagesSagas from "./sagas/imagesSagas";
import registerUserSaga from "./sagas/userSaga";

export function* rootSagas() {
    yield all([
        ...imagesSagas,
        ...registerUserSaga
    ])
}