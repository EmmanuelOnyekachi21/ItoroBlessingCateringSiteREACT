import React, { useState } from 'react'

const OrderSection = () => {
    const [orderType, setOrderType] = useState('delivery') // defaults to delivery
    return (
        <>
            <div className="form-check mb-2">
                <input
                    type="radio"
                    className="form-check-input"
                    id="pickup"
                    name="orderType"
                    value="pickup"
                    checked={orderType === 'pickup'}
                    onChange={(e) => setOrderType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="pickup">Pickup</label>
            </div>

            <div className="form-check">
                <input
                    type="radio"
                    className="form-check-input"
                    id="delivery"
                    name="orderType"
                    value="delivery"
                    checked={orderType === 'delivery'}
                    onChange={(e) => setOrderType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="delivery">Delivery</label>
            </div>
        </>
    )
}

export default OrderSection