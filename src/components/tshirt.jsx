import React, {useContext} from 'react';
import {CartContext} from './CartContext';

function Tshirt(props) {
    const [cart, setCart] = useContext(CartContext);


    const addToCart = () => {
        const tshirt = {name: props.name, price: props.price}
        setCart(currentCart => [...currentCart, tshirt])   //this set destructure de card and add the new tshirt object to it.  
    }

    return (
        <div>
            <h3>{props.name}</h3>
            <h3>{props.price}</h3>
            <h3>{props.key}</h3>
            <button onClick={addToCart}> buy </button>
        </div>
    );
}

export default Tshirt;