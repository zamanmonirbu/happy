import React, { useState } from 'react';
import axios from 'axios';

const ThanksButton = ({ postId }) => {
  const [thanksCount, setThanksCount] = useState(0);

  const handleThanks = async () => {
    try {
      setThanksCount((prevCount) => prevCount + 1);
      await axios.post(
        'http://localhost:3001/api/thanks',
        { postId: postId, count: thanksCount },
        { headers: { Authorization: localStorage.getItem('token') } }
      );
    } catch (error) {
      console.error('Thanks error:', error.message);
    }
  };

  return (
    <button
      className="flex-1 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full mr-2"
      onClick={handleThanks}
    >
      Thanks {thanksCount}
    </button>
  );
};

export default ThanksButton;
