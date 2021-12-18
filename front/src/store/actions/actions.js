import {toast} from "react-toastify";
import axiosApi from "../../axiosApi";
import imagesSlice from "../slices/imagesSlice";

export const {
    fetchImagesRequest,
    fetchImagesSuccess,
    fetchImagesFailure,
} = imagesSlice.actions;


export const createCocktail = data => {
    return async () => {
        try {
            await axiosApi.post('/images', data, {"content-type": "multipart/form-data"});
            toast.success('cocktail Created');
        } catch (e) {
            console.log(e)
        }
    };
};



