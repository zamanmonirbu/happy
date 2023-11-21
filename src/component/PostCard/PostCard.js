import React from 'react';

const PostCard = ({ title,category,img,text,timestamp }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
      <img className="w-full h-48 object-cover" src={img} alt="Instagram Post" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Title:{title}</div>
        <p className="text-gray-700 text-base">Category:{category}</p>
        <p className="text-gray-700 text-base">time:{timestamp}</p>
        <h4 className="text-gray-700 text-base">Post: {text}</h4>
      </div>
      <div className="flex bg-gray-200 p-4">
      <button className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
        Thanks
      </button>
      <button className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
        Opinion
      </button>
      <button className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Share
      </button>
    </div>

    </div>
  );
};


export default PostCard;
