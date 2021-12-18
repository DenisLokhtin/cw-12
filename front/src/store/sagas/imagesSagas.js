import {takeEvery, put} from 'redux-saga/effects';
import {fetchImagesFailure, fetchImagesRequest, fetchImagesSuccess, fetchMyImagesRequest} from "../actions/actions";
import axiosApi from "../../axiosApi";
import {toast} from "react-toastify";

export function* imagesRequest() {
    try {
        const response = yield axiosApi.get('/images', );
        yield put(fetchImagesSuccess(response.data));
    } catch (e) {
        if (e.response.status !== 401) {
            yield put(fetchImagesFailure);
            toast.error('Fetch to images failed');
            console.log(e)
        }
    }
}
export function* myImagesRequest() {
    try {
        const response = yield axiosApi.get('/images/author', );
        yield put(fetchImagesSuccess(response.data));
    } catch (e) {
        if (e.response.status !== 401) {
            yield put(fetchImagesFailure);
            toast.error('Fetch to images failed');
            console.log(e)
        }
    }
}

const imagesSaga = [
    takeEvery(fetchImagesRequest, imagesRequest),
    takeEvery(fetchMyImagesRequest, myImagesRequest)
];

export default imagesSaga;
