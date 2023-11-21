import React from 'react';

const UserDetails = ({ name, hobbies, img }) => {
  return (
    <button className="flex items-center space-x-4 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
      <img className="h-8 w-8 rounded-full" src={img} alt={`Profile of ${name}`} />
      <div>
        <p className="font-bold uppercase">{name}</p>
        {/* You can include hobbies or other details here */}
      </div>
    </button>
  );
};

export default UserDetails;
