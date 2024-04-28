import { useEffect, useReducer, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
//外部套件
import axios from 'axios';
import './assets/scss/all.scss'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import AlbumLayout from './pages/AlbumLayout';
import AlbumIndex from './pages/AlbumIndex';
import Products from './components/Products';
import Cart from './components/Cart';
import { CartContent,cartReducer,cartInit } from './store';

function App() {
  const reducer = useReducer(cartReducer,cartInit);
    return (
    <CartContent.Provider value={reducer}>
      <div className="App">
        <Navbar />
        <div className='container mt-4'>
          <Routes>
            <Route path='/' element={<Home/>}></Route> 
            <Route path='/about' element={<About/>}></Route> 
            <Route path='/album' element={<AlbumLayout/>}>
              <Route index element={<AlbumIndex/>}></Route>
            </Route>
          </Routes>
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


