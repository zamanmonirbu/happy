import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../PostCard/PostCard';

const HelpContent = () => {
  const [helpPosts, setHelpPosts] = useState([]);

  useEffect(() => {
    const fetchSadContent = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/content/help');
        setHelpPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching happy content:', error);
      }
    };

    fetchSadContent();
  }, []);

  return (
    <div className="max-h-screen overflow-y-auto custom-scrollbar">
    <div className="grid grid-cols-1 gap-4">
      {helpPosts?helpPosts.map((post) => (
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

export default HelpContent;
