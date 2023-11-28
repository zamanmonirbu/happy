import React, { useEffect, useState } from 'react';
const CategoryComponent = () => {
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3001/posts'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchCategories();
  }, []);

    return (
      <div className="flex space-x-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {category.title}
          </button>
        ))}
      </div>
    );
    

};

export default CategoryComponent;
