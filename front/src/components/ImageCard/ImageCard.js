import React, {useState} from 'react';
import './ImageCard.css'
import PopImage from "../PopImage/PopImage";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ImagesDeleteRequest} from "../../store/actions/actions";

const ImageCard = (props) => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const openModal = () => {
        if (show === true) {
            return 'modal'
        } else {
            return 'none'
        }
    };

    const onDelete = () => {
        dispatch(ImagesDeleteRequest(props.id));
    };

    const deleteButton = () => {
        if (props.delete) {
            return (
                <p onClick={onDelete} className="delete">
                    Delete
                </p>
            )
        }
    };

    return (
        <>
        <div className="ImageCard">
            <img onClick={() => setShow(true)} src={'http://localhost:8001/' + props.image} alt=""/>
            <h3>{props.title}</h3>
            <p>By: <Link to={"/users/" + props.author._id + "/images"}
                className="author">{props.author.displayName}</Link></p>
        {deleteButton()}
        </div>
    <PopImage
        display={openModal()}
        close={() => setShow(false)}
        img={'http://localhost:8001/' + props.image}
    />
</>
)
    ;
};

export default ImageCard;