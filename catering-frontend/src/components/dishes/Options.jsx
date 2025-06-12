import React, { useContext, useEffect } from 'react'
import QuantitySelector from '../ui/QuantitySelector'
import styles from './OptionsDropdown.module.css';
import { DishContext } from '../../context/DishContext';



const Options = ({option}) => {
    const { extras, toggleExtra, orderOption, note } = useContext(DishContext);
    useEffect(() => {
        // This effect runs when the extras change, you can use it to perform any side effects if needed
        // For example, you might want to log the current extras or perform some calculations
        console.log('Extras updated:', extras);
        console.log('OrderType', orderOption);
        console.log('Note', note);
    }, [extras, orderOption, note]);
    return (
        <div className={`d-flex align-items-center justify-content-between`}>
            {/* Left Side: Checkbox and Label */}
            <div className={`d-flex align-items-baseline gap-3`}>
                <input type="checkbox" checked={!!extras[option.id]} onChange={() => toggleExtra(option.id)} />
                <div className='d-flex flex-column'>
                    <span className='d-inline-block'>{option.name}</span>
                    <span className="inline-block text-muted small">
                        {`₦${option.price}`}
                    </span>
                </div>
            </div>

            {/* Right side: Counter */}
            <div className={`${!!extras[option.id] ? 'd-block' : 'd-none'}`}>
                <div className={`${styles.selectorPositioning}`}>
                    <QuantitySelector option={option} />
                </div>
            </div>


        </div>
    )
}

export default Options