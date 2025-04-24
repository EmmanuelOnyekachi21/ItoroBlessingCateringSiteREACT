import React from 'react'
import styles from './CTASection.module.css'


const CTASection = () => {
    return (
        <div className='pt-5 text-white'>
            <h1 className="poppins-bold text-center mb-3">
                Ready to Experience Itoro's Delicious Food?
            </h1>
            <p className='fs-3 mx-auto text-center' style={{ width: '60%' }}>
                Order now for delivery or takeaway, or book our catering services for your next event.
            </p>

            <div className={`mt-5 ${styles.buttonDisplay}`}>
                <div className={`${styles.containerWidth}`}>
                    <div className={`${styles.buttonFlex}`}>
                        <button className={`btn btn-dark px-4 py-md-3 py-3`}>Order Food Now</button>
                        <button className={`btn btn-light px-5 py-md-3 py-3`}>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CTASection