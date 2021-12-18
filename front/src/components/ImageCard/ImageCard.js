import React from 'react';
import './ImageCard.css'

const ImageCard = (props) => {
    return (
        <div className="ImageCard">
            <img src={'http://localhost:8001/' + props.image} alt=""/>
            <h3>title{props.title}</h3>
            <p>By: {props.author}</p>
        </div>
    );
};

export default ImageCard;