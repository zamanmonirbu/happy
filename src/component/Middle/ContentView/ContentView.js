import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import  './custom-scrollbar.css'
// import TestHello from './TestHello';
const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response=await axios.get('http://localhost:3001/api/posts', { headers: { Authorization: token } }) // Replace with your actual API endpoint
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  },[token]);

  // console.log(posts);
  return (
    <div className="max-h-screen overflow-y-auto custom-scrollbar">
      <div className="grid grid-cols-1 gap-4">
        {posts?posts.post?.map((post) => (
          <PostCard
          firstName={posts.lastName}
          lastName={posts.lastName}
          email={posts.email}
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

export default InstagramFeed;
