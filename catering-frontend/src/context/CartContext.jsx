import React, { createContext, useEffect, useState } from 'react'
import api from '../api';
import useGetorCreateCode from '../hooks/useGetorCreateCode';
import AddToCart from '../utils/addToCart';



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

    // a ditionary with dish's id and a boolean value indicating if user already added that
    const [dishInCart, setDishInCart] = useState({});
    // const [results, setResults] = useState({})
    const cart_code = useGetorCreateCode();
    // useEffect(() => {
    //   dishes.map((dish) => {
    //     const dish_id = dish.id
    //     const data = { cart_code, dish_id }
    //     api.post('/api/cart/product_in_cart/', data)
    //       .then(res => {
    //         // const results = { id: dish.id, inCart: res.data.dish_in_cart }
    //         setResults(prev => ({ ...prev, [dish.id]: res.data.dish_in_cart }))
    //       })
    //       .catch(err => console.log(err.message))
    //   })
    // }, [dishes])

    // const add_item = AddToCart(cart_code, dish.id, setDishInCart);
    const add_item = (dish, { xtras, orderOption, quantity, note } = {}) => {
        AddToCart(cart_code, dish, { xtras, orderOption, quantity, note });
        setNumberOfItems(curr => curr + 1);
        setDishInCart((prev) => ({ ...prev, [dish.id]: true }));
    }
    
    return (
        <CartContext.Provider value={{ numberOfItems, setNumberOfItems, add_item, dishInCart }}>
            {children}
        </CartContext.Provider>
    )
}
