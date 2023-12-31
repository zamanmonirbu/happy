import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../PostCard/PostCard';

const SadContent = () => {
  const [sadPosts, setSadPosts] = useState([]);

  useEffect(() => {
    const fetchSadContent = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/content/sad');
        setSadPosts(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('Error fetching happy content:', error);
      }
    };

    fetchSadContent();
  }, []);

  return (
    <div className="max-h-screen overflow-y-auto custom-scrollbar">
    <div className="grid grid-cols-1 gap-4">
      {sadPosts?sadPosts.map((post) => (
        <PostCard
        key={post._id} 
        value={post._id} 
        title={post.title}
        category={post.category}
        img={post.img}
        text={post.text}
        timestamp={post.timestamp}
      />
      
      )):"Loading posts"}
    </div>
  </div>

  );
};

export default SadContent;
