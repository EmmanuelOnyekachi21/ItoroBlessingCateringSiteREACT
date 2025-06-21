import React, { createContext, useContext, useEffect, useState } from 'react'
import { CartContext } from './CartContext';
import api from '../api';


export const DishContext = createContext();
export const DishProvider = ({ children }) => {
    const [quantity, setQuantity] = useState(1);
    const [extras, setExtras] = useState({});
    const [orderOption, setOrderOption] = useState('delivery');
    const [note, setNote] = useState('');
    const { setNumberOfItems } = useContext(CartContext);
    // When user clicks on the increment or decrement button, we update the quantity state.
    // If the quantity is less than 1, we set it to 1.
    // If the quantity is greater than 1, we set it to that value.
    const incrementQuantity = () => {
        setQuantity(prev => prev + 1);
        setNumberOfItems(curr => curr + 1);
    }
    const decrementQuantity = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
        setNumberOfItems(curr => curr - 1)
    }

    const toggleExtra = (id) => {
        setExtras((prev) => {
            const updated = { ...prev }
            if (updated[id]) {
                delete updated[id];
            } else {
                updated[id] = { quantity: 1 }
            }

            return updated;
        })
    }
    const incrementExtraQuantity = (id) => {
        setExtras((prev) => {
            const updated = { ...prev };
            if (updated[id]) {
                updated[id] = {
                    ...updated[id],
                    quantity: updated[id].quantity + 1
                }
            }
            return updated;
        })
    }
const decrementExtraQuantity = (id) => {
    setExtras((prev) => {
        const updated = { ...prev };
        if (updated[id]) {
            updated[id] = {
                ...updated[id], quantity: updated[id].quantity - 1
            }
        }
        return updated;
    })
}

// The DishContext provides the state and functions to manage the dish details.
// It includes functions to increment and decrement the quantity of the dish,
// toggle extras, and manage the order option and note.
// The context is used in the DishInfo component to manage the dish details and order options.
// The DishContext is used to manage the dish details and order options.


return (
    <DishContext.Provider value={{
        extras,
        incrementExtraQuantity,
        decrementExtraQuantity,
        toggleExtra,
        incrementQuantity,
        decrementQuantity,
        quantity,
        setQuantity,
        orderOption,
        setOrderOption,
        note,
        setNote
    }}>
        {children}
    </DishContext.Provider>
)

}