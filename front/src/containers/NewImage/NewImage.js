import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createImage} from "../../store/actions/actions";
import './NewImage.css'

const NewImage = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user);

    const [data, setData] = useState({
        title: '',
        image: null,
        author: user.displayName,
    });

    const onSubmit = (e) => {
        e.preventDefault();
        let newData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            newData.append(key, value);
        }
        dispatch(createImage(newData));
    };

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setData(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        setData(prevState => {
            return {...prevState, [name]: file};
        });
    };

    console.log(data)

    return (
        <form onSubmit={onSubmit}>
            <p>
                <input onChange={inputChangeHandler} name="title" type="text" placeholder="title"/>
            </p>
            <p>
                <input name="image" onChange={fileChangeHandler} type="file"/>
            </p>
            <button>Create</button>
        </form>
    )
};

export default NewImage;