import React, {useState} from 'react';
import './ImageCard.css'
import PopImage from "../PopImage/PopImage";

const ImageCard = (props) => {
    const [show, setShow] = useState(false);

    const openModal = () => {
        if (show === true) {
            return 'modal'
        } else {
            return 'none'
        }
    };

    return (
        <>
            <div className="ImageCard">
                <img onClick={() => setShow(true)} src={'http://localhost:8001/' + props.image} alt=""/>
                <h3>{props.title}</h3>
                <p>By: <span className="author">{props.author}</span></p>
            </div>
            <PopImage
                display={openModal()}
                close={() => setShow(false)}
                img={'http://localhost:8001/' + props.image}
            />
        </>
    );
};

export default ImageCard;