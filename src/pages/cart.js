import React from 'react'
import { CartContext } from '../components/context/useContext'
import { useContext } from 'react';
const Cart = () => {
    const {items, addItem} = useContext(CartContext);
    

    return(
        <div>
            {
            items.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                </div>
            ))
    }
        </div>
    )
}

export default Cart;