import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
    const [post, setPost] = useState({})
    const { postId } = useParams();
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            <h2>Post detail :{postId}</h2>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;