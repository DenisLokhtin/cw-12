import {toast} from "react-toastify";
import axiosApi from "../../axiosApi";
import imagesSlice from "../slices/imagesSlice";
import {historyPush} from "./historyActions";
import {useDispatch} from "react-redux";

export const {
    fetchImagesRequest,
    fetchImagesSuccess,
    fetchImagesFailure,
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



