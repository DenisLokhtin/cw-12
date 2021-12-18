import {takeEvery, put} from 'redux-saga/effects';
import {fetchImagesFailure, fetchImagesRequest, fetchImagesSuccess} from "../actions/actions";
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

const imagesSaga = [
    takeEvery(fetchImagesRequest, imagesRequest)
];

export default imagesSaga;
