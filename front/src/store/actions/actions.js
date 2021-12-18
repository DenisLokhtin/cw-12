import {toast} from "react-toastify";
import axiosApi from "../../axiosApi";
import imagesSlice from "../slices/imagesSlice";

export const {
    fetchImagesRequest,
    fetchMyImagesRequest,
    fetchUserImagesRequest,
    fetchImagesSuccess,
    fetchImagesFailure,
    ImagesDeleteRequest
} = imagesSlice.actions;

export const createImage = data => {
    return async () => {
        try {
            await axiosApi.post('/images', data, {"content-type": "multipart/form-data"});
            toast.success('Image Created');
        } catch (e) {
            console.log(e)
        }
    };
};



