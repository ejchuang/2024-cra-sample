import { useEffect, useReducer, useState } from 'react';
//外部套件
import axios from 'axios';
import './assets/scss/all.scss'
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import { CartContent,cartReducer,cartInit } from './store';

function App() {
  const reducer = useReducer(cartReducer,cartInit)
  return (
    <CartContent.Provider value={reducer}>
      <div className="App">
        <Navbar />
        <div className='container mt-4'>
          {/* {外層格線} */}
          <div className='row'>
            <div className='col-md-7'>
              <Products />
            </div>
            <div className='col-md-5'>
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </CartContent.Provider>
  );
}



export default App;


