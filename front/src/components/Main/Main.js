import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchImagesRequest} from "../../store/actions/actions";
import './Main.css'
import ImageCard from "../ImageCard/ImageCard";
import PopImage from "../PopImage/PopImage";
import {Link} from "react-router-dom";


const Main = (props) => {
    const dispatch = useDispatch();
    const images = useSelector(state => state.reducer.images);

    useEffect(() => {
        dispatch(fetchImagesRequest())
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
                <h2>Images list</h2>
                <Link to='/MyImages' className="newImages">My Images</Link>
            </div>
            <div className="cards">
                {printImages()}
            </div>
        </div>
    )
};

export default Main;