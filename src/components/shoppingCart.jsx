import React, { useContext } from 'react';
import {CartContext} from './CartContext'

function ShoppingCart(props) {
    const [cart, setCart] = useContext(CartContext);

    return (
        <div>
            <span>items in cart: {cart.length} </span>
            <span>total price: {cart.price} </span>
        </div>
    );
}

export default ShoppingCart;