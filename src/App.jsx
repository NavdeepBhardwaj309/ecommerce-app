import { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import {CartProvider} from './context/CartContext'
import {ProductProvider} from './context/ProductContext'
function App() {
  
  return (
    <>
      <div>
        <ProductProvider>
        <CartProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Product/:id' element={<Product/>}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
          </Routes>
        
        </Router>
        </CartProvider>
        </ProductProvider>
      </div>
     
    </>
  )
}

export default App
