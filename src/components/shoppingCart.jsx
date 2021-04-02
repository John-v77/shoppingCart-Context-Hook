import React, { useContext } from 'react';
import {CartContext} from './CartContext'

function ShoppingCart(props) {
    const contextValue = useContext(CartContext);

    return (
        <div>
            <span>items in cart: 0 </span>
            <span>total price: {contextValue} </span>
        </div>
    );
}

export default ShoppingCart;