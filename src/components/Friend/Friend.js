import React from 'react';

const Friend = (props) => {
    const { name, phone, website, address } = props.friend
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '15px',
        margin: '10px'
    }
    return (
        <div style={friendStyle}>
            <h1>I am : {name}</h1>
            <h2>call me : {phone}</h2>
            <p>visit me : {website}</p>
            <p>my address : {address.city}</p>
        </div>
    );
};

export default Friend;