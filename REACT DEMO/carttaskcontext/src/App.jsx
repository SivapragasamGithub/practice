import React from 'react';
import { CartProvider } from './CartContext';
import Products from './Products';
import CartPage from './CartPage';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <CartProvider>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <Products />
          </div>
          <div className='col-lg-4' >
            <CartPage />
          </div>
        </div>
      </div>

    </CartProvider>
  );
}

export default App;
