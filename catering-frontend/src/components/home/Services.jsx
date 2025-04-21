import React from 'react'
import styles from './Services.module.css'

const Services = ({ feature }) => {
    // Keep check on if hovered or not.
    return (
        <div className='mb-4'>
            <div className='d-flex align-items-start gap-3'>
                {feature.icon}
                <div className='d-flex flex-column'>
                    <h3 className='lato-bold'>{feature.title}</h3>
                    <span className={`${styles.spanWidth} text-muted`}>
                        From birthdays to anniversaries, our catering services make every celebration memorable with delicious food.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Services