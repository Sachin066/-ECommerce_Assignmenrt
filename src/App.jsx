import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import context
import UserContext from './context/UserContext';

// import components
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';

import ProductDetails from './components/ProductDetails';
import Profile from './components/Profile';

// redux setup
import { Provider } from 'react-redux';
import Store from './redux/Store';


import Checkout from './components/Checkout';

export default function App() {

  
  return (

      <div>


        <UserContext>
          <Provider store={Store}>

            <BrowserRouter>

              <div>
                <Header />
              </div>



              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/productdetails/:id' element={<ProductDetails />} />
                <Route path='/login' element={<Login />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/profile' element={<Profile />} />
                

              </Routes>
            </BrowserRouter>
          </Provider>
        </UserContext>
      </div>
  )
}
