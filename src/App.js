import { useEffect, useReducer, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
//外部套件
import axios from 'axios';
import './assets/scss/all.scss'
import Navbar from './components/Navbar';
import {Home,About,NotFound} from './pages';
import AlbumLayout from './pages/AlbumLayout';
import AlbumIndex from './pages/AlbumIndex';
import AlbumPhoto from './pages/AlbumPhoto';
import AlbumSearch from './pages/AlbumSearch';
import Products from './components/Products';
import Cart from './components/Cart';
import { CartContent, cartReducer, cartInit } from './store';

function App() {
  const reducer = useReducer(cartReducer, cartInit);
  return (
    <CartContent.Provider value={reducer}>
      <div className="App">
        <Navbar />
        <div className='container mt-4'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/album' element={<AlbumLayout />}>
              <Route index element={<AlbumIndex />}></Route>
              <Route path='search' element={<AlbumSearch />}></Route>
              <Route path=':id' element={<AlbumPhoto />}></Route>
            </Route>
            <Route path='*' element={<NotFound />}></Route>
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


