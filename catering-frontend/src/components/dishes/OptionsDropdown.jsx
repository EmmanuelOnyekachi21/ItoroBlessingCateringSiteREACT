import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './OptionsDropdown.module.css';
import QuantitySelector from '../ui/QuantitySelector';
import Options from './Options';

const OptionsDropdown = ({ options, extra }) => {
    // tracks if the dropdown is open or not
    const [isopen, setIsOpen] = useState(false);
    // const [selectedOption, setSelectedOption] = useState({}); // selectedOptions is an object that stores which meat options are selected, along with their quantity.
    const toggle = () => setIsOpen(!isopen);
    // const handleChecks = (id) => {
    //     setSelectedOption((prev) => (
    //         {
    //             ...prev, [id]: prev[id] ? undefined : { quantity: 1 },
    //         }
    //     ));
    // };

    // const incrementQuantity = (id) => {
    //     setSelectedOption((prev) => (
    //         {
    //             ...prev, [id]: { quantity: prev[id].quantity + 1 }
    //         }
    //     ))
    // }

    // const decrementQuantity = (id) => {
    //     setSelectedOption((prev) => (
    //         {
    //             ...prev, [id]: {
    //                 quantity: prev[id].quantity > 1 ? prev[id].quantity - 1 : 1,
    //             }
    //         }
    //     ))
    // }

    return (
        <div className="my-3">
            <div onClick={toggle} className='d-flex align-items-center justify-content-between'>
                <span>{extra.name}</span>
                <button className='btn btn-light'>
                    {
                        isopen ? <ChevronUp size={20} /> : <ChevronDown size={20} />
                    }
                </button>
            </div>

            <div className={`mx-auto ${styles.dropdown} ${isopen ? styles.open : ''}`} style={{ width: '95%' }}>
                <div className="py-3 border-bottom">
                    {options.map((option) => (
                        <Options
                            key={option.id}
                            // handleChecks={handleChecks}
                            // decrementQuantity={decrementQuantity}
                            // incrementQuantity={incrementQuantity}
                            // selectedOption={selectedOption}
                            option={option}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OptionsDropdown