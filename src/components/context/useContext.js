import React, { createContext, useState } from 'react';

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([{
        id:1,
        title: "primer producto",
        count: 2
    }])

    const isInCart =  (id) => {

    }

    const addItem = (item, count) => {
        setItems([...items, {...item, count: count}])
    }

    return(
        <CartContext.Provider value={{ items, addItem}}>
        {children}
        </CartContext.Provider>
    )
}
