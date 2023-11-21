import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';

const InstagramFeed = () => {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/posts')
      .then((response) => setPosts(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

    return (
        <div>
             <div className="grid grid-cols-1 gap-4">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          category={post.category}
          img={post.img}
          text={post.text}
          timestamp={post.timestamp}
          
        />
      ))}
    </div>
        </div>
    );
};

export default InstagramFeed;