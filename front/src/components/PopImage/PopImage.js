import React from 'react';
import Layout from "../UI/Layout/Layout";
import "./PopImage.css"

const PopImage = (props) => {
    return (
            <div className={props.display}>
                <div className="pop">
                    <div>
                        <img  className="pop-image" src={props.img} alt="image"/>
                        <span onClick={props.close} className="text">Close</span>
                    </div>
                </div>
                <Layout/>
            </div>
    );
};

export default PopImage;