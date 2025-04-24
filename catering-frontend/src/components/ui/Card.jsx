import React from 'react'
import styles from './Card.module.css'
import { BaseURL } from '../../api'


const Card = ({ product }) => {
    return (
        <div className='p-3'>
            <div className={`card ${styles.cardHover}`}>
                <div className={`${styles.cardImgWrapper}`}>
                    <img className={`card-img-top ${styles.cardImgZoom} w-100 h-100`} src={`${BaseURL}${product.image}`} alt="Image of Dish" />
                </div>
                <div className="card-body">
                    <div className='d-flex mb-3 justify-content-between'>
                        <h5 className="card-title">{product.name}</h5>
                        <span className={`lato-bold align-items-center`} style={{ color: 'rgb(var(--orange))' }}>{`₦${product.price}`}</span>
                    </div>
                    <p className="card-text">{product.description}</p>
                    <button className={`btn border w-100 ${styles.orderHover}`}>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card