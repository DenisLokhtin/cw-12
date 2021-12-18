import React from 'react';
import {useDispatch} from "react-redux";
import {logoutUser} from "../../../../store/actions/usersAction";
import {Link} from "react-router-dom";

const UserMenu = ({user}) => {
    const dispatch = useDispatch();

    return (
        <div>
            Hello, <Link to="/myImages"><b>{user}</b></Link>! <span onClick={() => dispatch(logoutUser())} className="link">Logout</span>
        </div>
    );
};

export default UserMenu;