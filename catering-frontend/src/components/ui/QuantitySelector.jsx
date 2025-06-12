import { Minus, Plus } from 'lucide-react'
import React, { useContext } from 'react'
import { DishContext } from '../../context/DishContext';

const QuantitySelector = ({ option }) => {
    const { extras, incrementExtraQuantity, decrementExtraQuantity } = useContext(DishContext);
    return (
        <div className="input-group input-spinner">
            <div className="input-group-prepend">
                <button disabled={extras[option.id]?.quantity <= 1} className="btn border btn-light" onClick={() => decrementExtraQuantity(option.id)}>
                    -
                </button>
            </div>
            <input type="text" className=" text-center border-none border" value={extras[option?.id]?.quantity ?? ''} readOnly style={{ width: '4rem', padding: '0' }} />
            <div className="input-group-append">
                <button className="border btn btn-light" onClick={() => incrementExtraQuantity(option.id)}>
                    +
                </button>
            </div>
        </div>
    )
}

export default QuantitySelector