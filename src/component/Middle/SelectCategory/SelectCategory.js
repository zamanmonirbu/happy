import React, { useEffect, useState } from 'react';
import InstagramFeed from '../ContentView/ContentView';
import HappyContent from '../Category/HappyContent';
import SadContent from '../Category/SadContent';
import HelpContent from '../Category/HelpContent';
import NewsContent from '../Category/NewsContent';


const Middle = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isScrolling, setIsScrolling] = useState(false);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolling(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {!isScrolling && (
        <div className="flex justify-around my-2 bg-gray-800  mx-12 rounded-xl text-white">
          <button
            className={`p-4 pl-8 pr-8 rounded-md ${selectedCategory === 'all' ? 'bg-gray-700' : 'hover:bg-gray-500'} `} onClick={() => handleCategoryClick('all')} >All
          </button>
          <button
            className={`p-4 pl-8 pr-8 rounded-md ${selectedCategory === 'happy' ? 'bg-gray-700' : 'hover:bg-gray-500'}`} onClick={() => handleCategoryClick('happy')} >Happy
          </button>
          <button
            className={`p-4 pl-8 pr-8 rounded-md ${selectedCategory === 'sad' ? 'bg-gray-700' : 'hover:bg-gray-500'}`} onClick={() => handleCategoryClick('sad')} >Sad
          </button>
          <button
            className={`p-4 pl-8 pr-8 rounded-md ${selectedCategory === 'help' ? 'bg-gray-700' : 'hover:bg-gray-500'}`} onClick={() => handleCategoryClick('help')} >Help
          </button>
          <button
            className={`p-4 pl-8 pr-8 rounded-md ${selectedCategory === 'news' ? 'bg-gray-700' : 'hover:bg-gray-500'}`} onClick={() => handleCategoryClick('news')} >News
          </button>
        </div>
      )}

      {selectedCategory === 'all' && <InstagramFeed />}
      {selectedCategory === 'happy' && <HappyContent />}
      {selectedCategory === 'sad' && <SadContent />}
      {selectedCategory === 'help' && <HelpContent />}
      {selectedCategory === 'news' && <NewsContent />}
    </div>
  );
};

export default Middle;
