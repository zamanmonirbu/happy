import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProfile = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [totalTime, setTotalTime] = useState(0);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [followedUsers, setFollowedUsers] = useState([]);

  useEffect(() => {
    // Fetch user data based on the provided userId
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/user/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Fetch total time history
    const fetchTotalTime = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/user/${userId}/total-time`);
        setTotalTime(response.data.totalTime);
      } catch (error) {
        console.error('Error fetching total time:', error);
      }
    };

    // Fetch bookmarked posts
    const fetchBookmarkedPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/user/${userId}/bookmarked-posts`);
        setBookmarkedPosts(response.data);
      } catch (error) {
        console.error('Error fetching bookmarked posts:', error);
      }
    };

    // Fetch followed users
    const fetchFollowedUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/user/${userId}/followed-users`);
        setFollowedUsers(response.data);
      } catch (error) {
        console.error('Error fetching followed users:', error);
      }
    };

    fetchUserData();
    fetchTotalTime();
    fetchBookmarkedPosts();
    fetchFollowedUsers();
  }, [userId]);

  return (
    <div>
      {userData && (
        <div>
          <h2>{userData.firstName} {userData.lastName}'s Profile</h2>
          <p>Email: {userData.email}</p>
          <p>Joined on: {userData.joinDate}</p>

          {/* Update Profile Button */}
          <button onClick={() => console.log('Update Profile clicked')}>Update Profile</button>

          {/* Total Time History */}
          <div>
            <h3>Total Time History</h3>
            <p>Total Time Spent: {totalTime} hours</p>
          </div>

          {/* Bookmarked Posts */}
          <div>
            <h3>Bookmarked Posts</h3>
            {bookmarkedPosts.map(post => (
              <div key={post._id}>
                <p>{post.title}</p>
                {/* Display other post details as needed */}
              </div>
            ))}
          </div>

          {/* Followed Users */}
          <div>
            <h3>Followed Users</h3>
            {followedUsers.map(user => (
              <div key={user._id}>
                <p>{user.firstName} {user.lastName}</p>
                {/* Display other user details as needed */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
