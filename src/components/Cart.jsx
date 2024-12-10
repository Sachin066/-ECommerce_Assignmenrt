import React, { useContext } from 'react';
import { userContext } from '../context/UserContext';
import { useDispatch, useSelector } from 'react-redux';
import ShowProduct from './ShowProduct';
import { clearCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { isLoggedIn } = useContext(userContext);
  const temp = localStorage.getItem('currentUser');
  console.log('temp', temp);
  let currentUser = [];
  if (temp && temp!='null') currentUser = JSON.parse(atob(temp));
  console.log('current user from cart', currentUser);

  // clear cart items
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log('cart items', cartItems);

  const currentUserData = [];
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].userId == currentUser.id) {
      currentUserData.push(cartItems[i]);
    }
  }
  console.log('current user data form cart', currentUserData);

  return currentUserData.length == 0 ? (
    <div className="flex items-center justify-center h-screen dark:bg-gray-900 ">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 animate-bounce  dark:text-white">Oops! No item found in Cart</h1>
        <p className="text-gray-600  dark:text-gray-300">Please add some items.</p>
      </div>
    </div>
  ) : (
    <div className='dark:bg-gray-900 h-[92vh]'>
      <div className="container flex flex-wrap justify-center mx-auto py-10 dark:text-white">
        {currentUserData.map((item, index) => (
          <ShowProduct data={item} key={item.id} />
        ))}
      </div>

      <div className="flex justify-center mx-auto my-0 w-full">
      <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2  rounded w-1/4"
            onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {/* <button> */}
        <Link to='/checkout'
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 text-center mx-5 rounded w-1/4"
          
        >
          Place Order
        </Link>

        {/* </button> */}
      </div>
    </div>
  );
}
