import React from 'react';
import Tshirt from './tshirt.jsx'

function TshirtList(props) {

    const dataBase = [
        {name: 'red tshirt', price:'10.99', id:'1'},
        {name: 'blue tshirt', price:'10.99', id:'2'},
        {name: 'grey tshirt', price:'10.99', id:'3'}
    ]

    const displayItem = () => {
        return dataBase.map(eachItem => {
            return <Tshirt name={eachItem.name} price={eachItem.price} key={eachItem.id} />
        })
    }

    return (
        <div>
            {displayItem}
        </div>
    );
}

export default TshirtList;