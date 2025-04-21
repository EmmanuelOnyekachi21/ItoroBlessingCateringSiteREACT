import { ChefHat, Home } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/')
    }
    return (
        <section className='d-flex justify-content-center align-items-center vh-100'>
            <div className='d-flex flex-column text-center p-4'>
                <div className=''>
                    <ChefHat className='' style={{ height: '5rem', width: '5rem', color: 'var(--orange)' }} />
                </div>
                <h2 className='poppins-bold' style={{ fontSize: '48px' }}>404</h2>
                <p className='fs-2 text-muted'>Page Not Found</p>
                <p className='mx-auto' style={{ width: '80%' }}>
                    The page you're looking for doesn't seem to exist. It might have been moved or deleted.
                </p>

                <button onClick={handleGoHome} className={`btn mb-4 text-white d-flex align-items-center justify-content-center gap-2 mx-auto ${styles.buttonEffect}`}>
                    <Home />
                    <span>Return to Home</span>
                </button>
            </div>
        </section>

    )
}

export default NotFoundPage