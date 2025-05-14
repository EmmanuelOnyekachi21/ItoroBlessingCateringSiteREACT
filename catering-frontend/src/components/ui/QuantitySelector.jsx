import { Minus, Plus } from 'lucide-react'
import React from 'react'

const QuantitySelector = ({incrementQuantity, decrementQuantity, option, selectedOption}) => {
    // console.log(option)
    // console.log(selectedOption)
    return (
        <div className="input-group input-spinner">
            <div className="input-group-prepend">
                <button disabled={selectedOption[option.id]?.quantity <= 1} className="btn border btn-light" onClick={() => decrementQuantity(option.id)}>
                    -
                </button>
            </div>
            <input type="text" className=" text-center border-none border" value={selectedOption[option?.id]?.quantity ?? ''} readOnly style={{ width: '4rem', padding: '0' }} />
            <div className="input-group-append">
                <button className="border btn btn-light" onClick={() => incrementQuantity(option.id)}>
                    +
                </button>
            </div>
        </div>
    )
}

export default QuantitySelector