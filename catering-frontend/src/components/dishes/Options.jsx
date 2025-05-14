import React from 'react'
import QuantitySelector from '../ui/QuantitySelector'
import styles from './OptionsDropdown.module.css';



const Options = ({option, handleChecks, selectedOption, decrementQuantity, incrementQuantity}) => {
    return (
        <div className={`d-flex align-items-center justify-content-between`}>
            {/* Left Side: Checkbox and Label */}
            <div className={`d-flex align-items-baseline gap-3`}>
                <input type="checkbox" checked={!!selectedOption[option.id]} onChange={() => handleChecks(option.id)} />
                <div className='d-flex flex-column'>
                    <span className='d-inline-block'>{option.name}</span>
                    <span className="inline-block text-muted small">
                        {`₦${option.price}`}
                    </span>
                </div>
            </div>

            {/* Right side: Counter */}
            <div className={`${selectedOption[option.id] ? 'd-block' : 'd-none'}`}>
                <div className={`${styles.selectorPositioning}`}>
                    <QuantitySelector selectedOption={selectedOption} option={option} decrementQuantity={decrementQuantity} incrementQuantity={incrementQuantity} />
                </div>
            </div>


        </div>
    )
}

export default Options