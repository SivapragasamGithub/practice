import React from 'react';
import { CartProvider } from './CartContext';
import Products from './Products';
import CartPage from './CartPage';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <CartProvider>
      <Products />
      <CartPage />
    </CartProvider>
  );
}

export default App;
