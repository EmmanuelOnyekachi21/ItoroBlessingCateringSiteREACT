import React from 'react'
import Card from './Card'

const CardContainer = ({ product }) => {
    return (
        <div className="col-lg-4 col-md-6 col-12">

            <Card product={product} />

        </div>
    )
}

export default CardContainer