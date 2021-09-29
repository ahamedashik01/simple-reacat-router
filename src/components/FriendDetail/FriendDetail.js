import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({})
    const history = useHistory();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, []);

    const handleClick = () => {
        history.push('/friends')
    }
    return (
        <div>
            <h3>Friend Deatil of : {friendId}</h3>
            <h1>{friend.name}</h1>
            <h3>{friend.phone}</h3>
            <h5>Website : {friend.website}</h5>
            <p>Works at : {friend.company?.name}</p>
            <button onClick={handleClick}>See all Friends</button>
        </div>
    );
};

export default FriendDetail;