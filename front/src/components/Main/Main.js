import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchImagesRequest} from "../../store/actions/actions";
import './Main.css'
import ImageCard from "../ImageCard/ImageCard";
import {Link} from "react-router-dom";


const Main = (props) => {
    const dispatch = useDispatch();
    const images = useSelector(state => state.reducer.images);

    useEffect(() => {
        dispatch(fetchImagesRequest())
    }, [dispatch]);

    const printImages = () => {
        return images.map((images, index) => {
            if (images) {
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
                <h2>Images list</h2>
                <Link to='/MyImages' className="newImages">My Images</Link>
                <Link to='/newImage' className="newImages">New Images</Link>
            </div>
            <div className="cards">
                {printImages()}
            </div>
        </div>
    )
};

export default Main;