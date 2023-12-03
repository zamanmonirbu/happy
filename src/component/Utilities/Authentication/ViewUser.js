import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewUser = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:3001/api/user', { headers: { Authorization: token } })
        .then((response) => {
          setUserData(response.data.user);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error.message);
        });
    } else {
      console.warn('Token not found. User not authenticated.');
    }
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <p>Hello {userData.firstName} {userData.lastName}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
       <Link className='text-blue-600 ' to="/" >You are authenticated.Go to home. </Link>
    </div>
  );
};

export default ViewUser;
