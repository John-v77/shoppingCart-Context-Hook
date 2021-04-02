import React from 'react';

function WindowShop(props) {


    const dataBase = [
        {name: 'red tshirt', price:'10.99', id:'1'},
        {name: 'blue tshirt', price:'12.99', id:'2'},
        {name: 'grey tshirt', price:'14.99', id:'3'}
        
    ]


    const showItems=() => {
        return dataBase.map(each =>{
            return(

                <div style={{display:'flex', flexDirection:'column'}}>
                    <h5>{each.name}</h5>
                    <p>Price: {each.price}</p>
                    <p>Decription</p>
                    <button style={{width:'8em', borderRadius:'4px'}} onClick={buyItems}>buy</button>
                </div>

            )
        })
    }

    const buyItems = () => {
        // console.log('buying item')
        // to implement later
    }



    return (
        <div>

            {showItems()}
        </div>
    );
}

export default WindowShop;