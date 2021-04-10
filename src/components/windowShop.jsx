import React from 'react';
import Tshirt from './tshirt';

function WindowShop(props) {


    const dataBase = [
        {name: 'red tshirt', price:'10.99', id:'1'},
        {name: 'blue tshirt', price:'12.99', id:'2'},
        {name: 'grey tshirt', price:'14.99', id:'3'}
        
    ]

    return (
        <div>
            <h4>WindowShop</h4>
            {dataBase.map(item =>   <Tshirt name={item.name} price={item.price} key={item.id}/>  )} 
            
        </div>
    );
}

export default WindowShop;