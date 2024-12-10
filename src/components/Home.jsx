import React, { useContext, useEffect, useState } from 'react';

import ShowProduct from './ShowProduct';
import { REACT_APP_PRODUCTS_API } from '../utils';
import { userContext } from '../context/UserContext';
import useOnline from '../customHooks/useOnline';


import Filter from './Filter';


export default function Home() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const { setIsLoggedIn } = useContext(userContext);

  // check for the online status using useOnline Hooks
  const isOnline = useOnline();

  useEffect(() => {
    const fetchData = () => {
      fetch(REACT_APP_PRODUCTS_API)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setFilterData(result);
          // console.log(result)
        })
        .catch((err) => {
          console.log('error in fetching all products: ', err);
          // alert('Some API error, Try after some time.');
          swal("Oops!", "Some API error!", "error")
        });
    };
    fetchData();

    setIsLoggedIn(localStorage.getItem('login'));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredProducts = data.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilterData(filteredProducts);
  };

  const handleFilter = (filters)=>{
    console.log(filters);

  
    console.log('rating', parseInt(filters.price))
    const filteredData = data.filter((curr)=>(
      ((filters.category).toLowerCase() === 'all' || curr.category == filters.category)  &&
     ( (filters.price).toLowerCase() === 'all' || curr.price < parseInt(filters.price)) &&
     ((filters.rating).toLowerCase() === 'all' || Math.round(curr.rating.rate) === parseInt(filters.rating))
    ))

    console.log('filtered data', filteredData);
    setFilterData(filteredData);

  }


 

  return (
    <div className='pb-10 dark:bg-gray-800'>
      
      <Filter data={data} handleFilter={handleFilter}/>
      <form className="mb-14 flex justify-center" onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 w-64 mr-2"
          />
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded dark:bg-gray-600"
          >
            Search
          </button>
        </div>
      </form>
      {filterData && filterData.length === 0 ? (
        <h1 className="text-gray-900 dark:text-gray-300 animate-bounce text-2xl font-bold text-center ">No data found.</h1>
      ) : (
        <div className="container flex flex-wrap justify-center mx-auto">
          {filterData.map((currdata, index) => (
            <ShowProduct data={currdata} key={currdata.id} />
          ))}
        </div>
      )}

    
    </div>
  );
}
