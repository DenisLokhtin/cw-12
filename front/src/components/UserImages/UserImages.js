import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import ImageCard from "../ImageCard/ImageCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserImagesRequest} from "../../store/actions/actions";
import {useParams} from "react-router";

const UserImages = (props) => {
    const dispatch = useDispatch();
    const images = useSelector(state => state.reducer.images);

    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchUserImagesRequest(id))
}, [dispatch]);

    const printImages = () => {
        if (images) {
            return images.map((images, index) => {
                return (
                    <ImageCard
                        key={images._id}
                        id={images._id}
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