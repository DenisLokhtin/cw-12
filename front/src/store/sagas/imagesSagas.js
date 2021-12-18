import {takeEvery, put} from 'redux-saga/effects';
import {
    fetchImagesFailure,
    fetchImagesRequest,
    fetchImagesSuccess,
    fetchMyImagesRequest,
    fetchUserImagesRequest,
    ImagesDeleteRequest
} from "../actions/actions";
import axiosApi from "../../axiosApi";
import {toast} from "react-toastify";

export function* imagesRequest() {
    try {
        const response = yield axiosApi.get('/images',);
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
        const response = yield axiosApi.get('/images/author',);
        yield put(fetchImagesSuccess(response.data));
    } catch (e) {
        if (e.response.status !== 401) {
            yield put(fetchImagesFailure);
            toast.error('Fetch to images failed');
            console.log(e)
        }
    }
}

export function* UserImagesRequest(id) {
    try {
        const response = yield axiosApi.get(`/images/user/${id.payload}`,);
        yield put(fetchImagesSuccess(response.data));
    } catch (e) {
        if (e.response.status !== 401) {
            yield put(fetchImagesFailure);
            toast.error('Fetch to images failed');
            console.log(e)
        }
    }
}

export function* ImagesDelete(id) {
    try {
        yield axiosApi.delete(`/images/${id.payload}`);
        const response = yield axiosApi.get('/images/author',);
        yield put(fetchImagesSuccess(response.data));
    } catch (e) {
        if (e.response.status !== 401) {
            toast.error('delete to images failed');
            console.log(e)
        }
    }
}

const imagesSaga = [
    takeEvery(fetchImagesRequest, imagesRequest),
    takeEvery(fetchMyImagesRequest, myImagesRequest),
    takeEvery(fetchUserImagesRequest, UserImagesRequest),
    takeEvery(ImagesDeleteRequest, ImagesDelete),
];

export default imagesSaga;
