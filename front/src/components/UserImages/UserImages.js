import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import ImageCard from "../ImageCard/ImageCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchMyImagesRequest} from "../../store/actions/actions";

const UserImages = (props) => {
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
                        author={images.author}
                        index={index}
                    />
                )
            })
        }
    };

    return (
        <div>
            <div className="main-header">
                <h2>User images list</h2>
                <Link to='/myImages' className="newImages">My images</Link>
            </div>
            <div className="cards">
                {printImages()}
            </div>
        </div>
    )
};

export default UserImages;