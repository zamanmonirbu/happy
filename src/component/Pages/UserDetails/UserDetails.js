import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
        <div className="w-1/3 h-32 bg-gray-500 m-1 rounded border-2xl pt-4">
          <button className="focus:outline-none focus:ring focus:border-blue-300 text-white">
            <img className="h-16 w-16 rounded-full" src={user?.img} alt={`Profile of ${user?.name}`} />
            <div>
              <p className="font-bold uppercase">{user?.name}</p>
            </div>
          </button>
        </div>
        <div className="w-1/3 h-32 bg-green-500 m-1 rounded border-2xl">
          <p>
            Today used
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            : {totalTime.hours}h {totalTime.minutes}m {totalTime.seconds}s
          </p>
        </div>
        <div className="w-1/3 h-32 bg-yellow-500 m-1 rounded border-2xl">
          <button className="p-2 rounded-md focus:outline-none focus:ring text-white text-xl">
            Your favorites
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
          </button>
        </div>
      </div>
      <hr className="my-4 border-t-2 border-gray-500" />
      <div className="bg-yellow-500 rounded-2xl ">
        <div className="text-white text-2xl">View By Categories</div>
        <div className="flex w-full h-32 items-center ">
          <button className="bg-blue-500 text-white border rounded-2xl p-4 m-2">Happy</button>
          <button className="bg-red-500 text-white rounded-2xl p-4 m-2">Sadness</button>
          <button className="bg-green-500 text-white rounded-2xl p-4 m-2">Help</button>
          <button className="bg-gray-500 text-white rounded-2xl p-4 m-2">News</button>
        </div>
      </div>

    </div>
  );
};

export default UserDetails;
