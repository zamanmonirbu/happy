import React, { useEffect, useRef, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import ThanksButton from '../Thanks/Thanks';


const ViewCategory = ({ value, title, img, text, timestamp,user }) => {
//   console.log("Last:",user.lastName);
  const lastName=user.lastName;
  const timeAgo = formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };
  const [isFullTextVisible, setFullTextVisible] = useState(false);
  const [isOverflowed, setIsOverflowed] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    if (textRef.current) {
      setIsOverflowed(textRef.current.textContent.length > 120);
    }
  }, [text]);

  const toggleFullText = () => {
    setFullTextVisible(!isFullTextVisible);
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl overflow-hidden shadow-md">
      <div className="relative w-full flex items-center">
        <img
          className="rounded-full h-8 w-8 object-cover m-2"
          src="https://lh3.googleusercontent.com/ogw/AKPQZvyfl5qMTe0lNdbDsWItDanKOEfCoQ99j725iWHDaA=s32-c-mo"
          alt="User Profile"
        />
        <a href="dfd" className="ml-2">
          <span>{lastName}</span> {timeAgo}
        </a>
        <div
          className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
          onClick={toggleOptions}
        >
          <div className={`w-1 h-1 bg-black rounded-full ${isOptionsVisible ? 'mb-1 rotate-45' : ''}`}></div>
          <div className={`w-1 h-1 bg-black rounded-full ${isOptionsVisible ? 'opacity-0' : ''}`}></div>
          <div className={`w-1 h-1 bg-black rounded-full ${isOptionsVisible ? '-mb-1 -rotate-45' : ''}`}></div>
        </div>
        {isOptionsVisible && (
          <div className="absolute top-full right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-md">
            <div className="p-2">
              <button className="block w-full text-left py-1 px-2 hover:bg-gray-100">Save</button>
              <button className="block w-full text-left py-1 px-2 hover:bg-gray-100">Report</button>
            </div>
          </div>
        )}
      </div>
      <img className="w-full h-auto object-cover" src={`http://localhost:3001/${img}`} alt="Instagram Post" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-4 text-left">{title}</div>
        <h4 className="text-black font-sans mb-4 text-left" ref={textRef}>
          {isFullTextVisible ? text : `${text?.slice(0, 120)}... `}
          {isOverflowed && (
            <span className="text-blue-500 cursor-pointer" onClick={toggleFullText}>
              {isFullTextVisible ? ' See less' : ' See more'}
            </span>
          )}
        </h4>

      </div>
      <div className="flex bg-gray-200 p-4">
        <ThanksButton postId={value} />
        <button className="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-2">
          Opinion
        </button>
        <button className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Share
        </button>
      </div>
    </div>
  );
};

export default ViewCategory;
