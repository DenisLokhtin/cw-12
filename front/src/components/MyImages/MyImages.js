import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import ImageCard from "../ImageCard/ImageCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchImagesRequest} from "../../store/actions/actions";

const MyImages = (props) => {
    const dispatch = useDispatch();
    const images = useSelector(state => state.reducer.images);
    const user = useSelector(state => state.users.user);

    useEffect(() => {
        dispatch(fetchImagesRequest())
    }, [dispatch]);

    const printImages = () => {
        return images.map((images, index) => {
            if (images && images.author === user.displayName) {
                return (
                    <ImageCard
                        key={images._id}
                        image={images.image}
                        title={images.title}
                        author={images.author}
                        index={index}
                    />
                )
            }
        })
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