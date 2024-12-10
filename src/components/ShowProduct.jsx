import React from 'react';
import { Link } from 'react-router-dom';

const ShowProduct = ({ data }) => {
  return (
    <div className="max-w-sm w-sm w-[250px] lg:w-[325px] rounded overflow-hidden shadow-lg mb-5 mx-8 border border-gray-200 hover:scale-105 duration-150 hover:shadow-2xl dark:border-gray-700">

      <Link to={`/productdetails/${data.id}`}>
        <div className="w-full flex justify-center">
          <img
            className="w-full p-2 lg:p-0  lg:w-full  aspect-[1] bg-blend-multiply"
            // className="w-full h-60 object-cover"

            src={data.image}
            alt={data.category}
          />
        </div>
      </Link>

      <div className="px-6 py-2 dark:bg-gray-800">
        <div className="font-bold text-xl text-gray-800 dark:text-white">
          {data.title}
        </div>
        <p className="text-gray-700 text-base dark:text-gray-300">
          {data.category}
        </p>
        <div className="font-bold text-md text-gray-800 dark:text-white">
          $ {data.price}
        </div>
      </div>

      <div className="px-6 py-2 dark:bg-gray-800">
        <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-white mr-2">
          {data.rating.rate} ⭐
        </span>
        <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-white mr-2">
          {data.rating.count} Ratings
        </span>
      </div>
    </div>
  );
};

export default ShowProduct;
