import React from 'react';
import UserView from '../../Right/RightSide/UserView';
import MakePost from '../../Left/Post/MakePost';
import Middle from '../../Middle/SelectCategory/SelectCategory';

const AllContent = () => {
  return (
    <div className="flex bg-gray-100 px-8">
      <div className="w-2/6 bg-gray-700 p-4 overflow-y-auto rounded-xl">
        <MakePost />
      </div>
      <div className="w-3/6 bg-gray-500 p-4 overflow-y-auto rounded-xl">
        <Middle/>
      </div>
      <div className="w-2/6 bg-gray-700 p-4 sticky top-0 rounded-xl">
        <UserView />
      </div>
    </div>
  );
};

export default AllContent;
