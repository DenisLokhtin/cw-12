import {createSlice} from "@reduxjs/toolkit";

const name = 'images';

const imagesSlice = createSlice({
    name,
    initialState: {
        images: [],
        fetchLoadingImages: false,
    },
    reducers: {
        fetchImagesRequest(state, action) {
            state.fetchLoadingImages = true;
        },
        fetchImagesSuccess(state, {payload: images}) {
            state.images = images;
            state.fetchLoadingImages = false;
        },
        fetchImagesFailure(state, action) {
            state.fetchLoadingImages = false;
        }
    }
});

export default imagesSlice;