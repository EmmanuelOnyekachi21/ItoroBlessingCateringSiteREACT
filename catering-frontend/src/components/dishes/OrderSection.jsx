import React, { useContext, useState } from 'react'
import { DishContext } from '../../context/DishContext'

const OrderSection = () => {
    const {setOrderOption, orderOption} = useContext(DishContext);
    return (
        <>
            <div className="form-check mb-2">
                <input
                    type="radio"
                    className="form-check-input"
                    id="pickup"
                    name="orderOption"
                    value="pickup"
                    checked={orderOption === 'pickup'}
                    onChange={(e) => setOrderOption(e.target.value)}
                />
                <label className="form-check-label" htmlFor="pickup">Pickup</label>
            </div>

            <div className="form-check">
                <input
                    type="radio"
                    className="form-check-input"
                    id="delivery"
                    name="orderOption"
                    value="delivery"
                    checked={orderOption === 'delivery'}
                    onChange={(e) => setOrderOption(e.target.value)}
                />
                <label className="form-check-label" htmlFor="delivery">Delivery</label>
            </div>
        </>
    )
}

export default OrderSection