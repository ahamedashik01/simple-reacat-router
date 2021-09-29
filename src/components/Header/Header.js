import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}
                to="/home">Home</NavLink>
            <NavLink activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}

                to="/friends">Friends</NavLink>
            <NavLink activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}
                to="/about">About</NavLink>
        </nav >
    );
};

export default Header;