import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import ImageCard from "../ImageCard/ImageCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchMyImagesRequest} from "../../store/actions/actions";

const MyImages = (props) => {
    const dispatch = useDispatch();
    const images = useSelector(state => state.reducer.images);

    useEffect(() => {
        dispatch(fetchMyImagesRequest())
    }, [dispatch]);

    const printImages = () => {
        if (images) {
            return images.map((images, index) => {
                return (
                    <ImageCard
                        key={images._id}
                        image={images.image}
                        title={images.title}
                        id={images._id}
                        author={images.author}
                        delete={true}
                        index={index}
                    />
                )
            })
        }
    };

    return (
        <div>
            <div className="main-header">
                <h2>My images list</h2>
                <Link to='/newImage' className="newImages">New image</Link>
            </div>
            <div className="cards">
                {printImages()}
            </div>
        </div>
    )
};

export default MyImages;