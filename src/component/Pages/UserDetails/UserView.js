import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDetails from './UserDetails';

const UserDataFetcher = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/api/user', { headers: { Authorization: token } }) // Replace with your actual API endpoint
        // console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <div>
      {
        user ? <UserDetails key={user._id} name={user.name} img={user.img} hobbies={user.hobbies} /> : "Loading"
      }
    </div>
  );
};

export default UserDataFetcher;
