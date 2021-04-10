import ShoppingCart from './components/shoppingCart.jsx'
import WindowShop from './components/windowShop.jsx'
import {CartProvider} from './components/CartContext'
import React from 'react'
import './components/style.css'

function App() {
  return (
    <CartProvider>
      <div>
        <ShoppingCart/>
        <div style={{border:'1px solid blue'}}>
        <WindowShop/>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
