import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserDetails = () => {
  const [totalTime, setTotalTime] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:3001/api/user', { headers: { Authorization: token } })
      .then((response) => {
        setUser(response.data)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error.message);
      });
    const startTime = new Date().getTime();

    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedMilliseconds = currentTime - startTime;

      const hours = Math.floor(elapsedMilliseconds / 3600000);
      const minutes = Math.floor((elapsedMilliseconds % 3600000) / 60000);
      const seconds = Math.floor((elapsedMilliseconds % 60000) / 1000);

      setTotalTime({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col">
    <div className="flex">
      <div className="w-1/3 h-32 bg-blue-400 m-1 rounded border-2xl p-4">
        <Link to='/user/profile' className=" text-white flex items-center">
          <img className="h-16 w-16 rounded-full mr-2" src="https://lh3.googleusercontent.com/ogw/ANLem4a-BhZdfCHuEJkUdjdhjUfzXYpjEq-KeRJ98sT4rg=s32-c-mo" alt={`Profile of ${user?.name}`} />
          <div>
            <p className="font-bold text-lg uppercase">{user?.name}</p>
          </div>
        </Link>
      </div>
      <div className="w-1/3 h-32 bg-green-400 m-1 rounded border-2xl p-4">
        <p className="text-white">
          Today's Usage
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          : {totalTime.hours}h {totalTime.minutes}m {totalTime.seconds}s
        </p>
      </div>
      <div className="w-1/3 h-32 bg-yellow-400 m-1 rounded border-2xl p-4">
        <button className="p-2 rounded-md focus:outline-none focus:ring text-white text-xl flex items-center">
          Your Favorites
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
        </button>
      </div>
    </div>
    <hr className="my-4 border-t-2 border-gray-500" />
  </div>
  
  );
};

export default UserDetails;
