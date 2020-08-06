import React, { useState } from 'react';
import Post from './Post';
import './App.css';

function App() {
    const [posts, setPosts] = useState([
        {
            username: 'userName',
            caption: 'hahaa',
            imageUrl:
                'https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop',
        },
        {
            username: 'Turu',
            caption: 'dog',
            imageUrl:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*',
        },
    ]);
    return (
        <div className="app">
            <div className="app__header">
                <img
                    className="app__headerImage"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt=""
                />
            </div>
            {posts.map((post) => (
                <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
            ))}
        </div>
    );
}

export default App;
