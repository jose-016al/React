import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from './Nav';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    const {userid} = useParams();

    useEffect(() => {
        fetchDatos();
    }, []);

    const fetchDatos = async () => {
        try {
            const url = "https://jsonplaceholder.typicode.com/posts/"+userid + "/comments";
            const respuesta = await fetch(url);
            const json = await respuesta.json();
            setPosts(json);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }
    return (
        <>
            <Nav/>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.name}</h2>
                    <p>Email: {post.email}</p>
                    <p>Body: {post.body}</p>
                </div>
            ))}
        </>
    );
}

export default Posts;