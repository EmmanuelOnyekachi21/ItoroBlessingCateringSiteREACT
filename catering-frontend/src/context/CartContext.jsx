import React, { createContext, useEffect, useState } from 'react'
import api from '../api';
import useGetorCreateCode from '../hooks/useGetorCreateCode';



export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [numberOfItems, setNumberOfItems] = useState(0);
    useEffect(() => {
        const cart_code = useGetorCreateCode();
        if (cart_code) {
            api.get(`/api/cart/get_cart_stat/?cart_code=${cart_code}`)
                .then(res => {
                    console.log(res.data);
                    setNumberOfItems(res.data.number_of_items)
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    }, [])
    return (
        <CartContext.Provider value={{ numberOfItems, setNumberOfItems }}>
            {children}
        </CartContext.Provider>
    )
}
