import React from 'react';
import UserView from '../UserDetails/UserView';
import MakePost from '../Post/MakePost';
import Middle from '../Middle/Middle';

const AllContent = () => {
  return (
    <div className="flex bg-gray-200 px-8">
      <div className="w-2/6 bg-gray-300 p-4 overflow-y-auto rounded-xl">
        <MakePost />
      </div>
      <div className="w-3/6 bg-blue-300 p-4 overflow-y-auto rounded-xl">
        <Middle/>
      </div>
      <div className="w-2/6 bg-green-300 p-4 sticky top-0">
        <UserView />
      </div>
    </div>
  );
};

export default AllContent;
