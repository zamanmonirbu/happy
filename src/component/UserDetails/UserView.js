import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDetails from './UserDetails';

const UserDataFetcher = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user/655c74668187c02ba4d1f921'); // Replace with your actual API endpoint
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
        user?<UserDetails key={user._id} name={user.name} img={user.img} hobbies={user.hobbies}/>:"Loading"
      }
    </div>
  );
};

export default UserDataFetcher;
