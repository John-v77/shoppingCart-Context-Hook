import React from 'react';

function Tshirt(props) {

    const addToCart = () => {
        console.log('click ..')
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