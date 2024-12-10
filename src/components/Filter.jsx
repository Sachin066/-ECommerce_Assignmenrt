import React, { useState } from 'react';
// import './Filter.css'; // Import a CSS file to customize styles

function groupBy(arr, criteria) {
  const newObj = arr.reduce(function (acc, currentValue) {
    if (!acc[currentValue[criteria]]) {
      acc[currentValue[criteria]] = [];
    }
    acc[currentValue[criteria]].push(currentValue);
    return acc;
  }, {});
  return newObj;
}

export default function Filter({ data, handleFilter }) {
  const category = groupBy(data, 'category');
  const categoryList = ['All', ...Object.keys(category)];

  const [cate, setCate] = useState('All');
  const [price, setPrice] = useState('All');
  const [rating, setRating] = useState('All');

  const handleSubmit = () => {
    handleFilter({ category: cate, price, rating });
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-800 mb-14 rounded-md shadow-md flex justify-center items-end">
      <div className="mb-4 mx-5">
        <label htmlFor="category" className="block text-gray-700 dark:text-gray-300 font-bold mb-2 w-1/4">
          Category
        </label>
        <select
          id="category"
          value={cate}
          onChange={(e) => setCate(e.target.value)}
          className="p-2 w-full border border-gray-300 dark:border-gray-600 rounded-md"
        >
          {categoryList.map((cat, index) => (
            <option value={cat} key={index}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4 mx-5">
        <label htmlFor="price" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
          Price{'$'}
        </label>
        <select
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-2 w-full border border-gray-300 dark:border-gray-600 rounded-md"
        >
          <option value="All">All</option>
          <option value="10">0-10</option>
          <option value="50">0-50</option>
          <option value="100">0-100</option>
        </select>
      </div>
      <div className="mb-4 mx-5">
        <label htmlFor="rating" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
          Rating
        </label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="p-2 w-full border border-gray-300 dark:border-gray-600 rounded-md"
        >
          <option value="All">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="mb-4 mx-5">
        <button
          onClick={handleSubmit}
          className="bg-gray-800 dark:bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
