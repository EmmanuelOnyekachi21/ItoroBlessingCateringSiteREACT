import React, { createContext, useContext, useState } from 'react'
import { CartContext } from './CartContext';


export const DishContext = createContext();
export const DishProvider = ({ children }) => {
    const [quantity, setQuantity] = useState(1);
    const [extras, setExtras] = useState([]);
    const [orderOption, setOrderOption] = useState('delivery');
    const [note, setNote] = useState('');

    const {setNumberOfItems} = useContext(CartContext);

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
            prev.includes(id) ? (
                prev.filter(extraId => id !== extraId)
            ) : (
                [...prev, id]
            )
        })
    }


return (
    <DishContext.Provider value={{
        incrementQuantity,
        decrementQuantity,
        toggleExtra,
        quantity,
        setQuantity,
        extras,
        setExtras,
        orderOption,
        setOrderOption,
        note,
        setNote
    }}>
        {children}
    </DishContext.Provider>
)

}

export default DishContext