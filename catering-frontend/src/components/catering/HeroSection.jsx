import React from 'react'
import styles from '../menu/Menu.module.css';
import buttonStyles from '../home/Home.module.css'


const HeroSection = ({ onRequestCateringClick }) => {
    return (
        <div className={`container-fluid text-center ${styles.hero}`} style={{ height: '60vh' }}>
            <div className={`${styles.content} ps-md-4`} style={{ paddingTop: '6rem' }} />
            <h1 className='poppins-bold'>Catering Services</h1>
            <p className={`text-muted text-center ${styles.heroText}`}>
                Let us make your special event memorable with our authentic African cuisine catering services
            </p>
            <div className='mt-5'>
                <button onClick={onRequestCateringClick} className={`${buttonStyles.button2Hover} btn text-white btn-lg`}>
                    Request Catering
                </button>
            </div>
        </div>
    )
}

export default HeroSection