import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend
    const history = useHistory();
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '15px',
        margin: '10px'
    }
    const url = `/friend/${id}`;
    const handleFriendClick = () => {
        history.push(`/friend/${id}`)
    }
    return (
        <div style={friendStyle}>
            <h1>I am : {name} id: {id}</h1>
            <h2>call me : {phone}</h2>
            <p>visit me : {website}</p>
            <p>my address : {address.city}</p>
            <Link to={url}>Details</Link>
            <br />
            <Link to={url}>
                <button>visit me</button>
            </Link>
            <button onClick={handleFriendClick}> Visit me 2</button>

        </div>
    );
};

export default Friend;