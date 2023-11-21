import React from 'react';
import InstagramFeed from '../InstagramFeed/InstagramFeed';
import UserView from '../UserDetails/UserView';

const AllContent = () => {
  return (
    <div className="flex bg-gray-200 p-4">
      {/* Left Content (3/5) */}
      <div className="w-3/5 bg-blue-300 p-4 overflow-y-auto">
        {/* Your left content goes here */}
        <InstagramFeed/>
        {/* Add more content as needed */}
      </div>

      {/* Right Content (2/5) */}
      <div className="w-2/5 bg-green-300 p-4 sticky top-0">
        <UserView/>
      </div>
    </div>
  );
};

export default AllContent;
