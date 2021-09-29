import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, []);
    return (
        <div>
            <h3>Friend Deatil of : {friendId}</h3>
            <h1>{friend.name}</h1>
            <h3>{friend.phone}</h3>
            <h5>Website : {friend.website}</h5>
            <p>Works at : {friend.company?.name}</p>
        </div>
    );
};

export default FriendDetail;