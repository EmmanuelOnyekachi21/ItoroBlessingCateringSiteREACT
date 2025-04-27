import React from 'react'
import Card from './Card'

/**
 * Wraps each product card inside a grid column.
 */
const CardContainer = ({ product, children }) => {
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <Card product={product}>
                {children}
            </Card>
        </div>
    )
}

export default CardContainer
