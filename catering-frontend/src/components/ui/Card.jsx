import React, { useState } from 'react'
import styles from './Card.module.css'
import { BaseURL } from '../../api'
import { Link, useNavigate } from 'react-router-dom'
import useCategories from '../../hooks/useCategories'

const MAX_LENGTH = 80

/**
 * Reusable Product Card Component
 * Displays dish image, name, price, description with 'show more' toggle.
 */
const Card = ({ product, children }) => {
    const [expanded, setExpanded] = useState(false) // Whether description is expanded
    const navigate = useNavigate()

    // Toggle between showing full or truncated description
    const toggleFullText = () => setExpanded(prev => !prev)

    // Display truncated text if too long
    const displayFullText = expanded
        ? product.description
        : (product.description.length > MAX_LENGTH
            ? product.description.slice(0, MAX_LENGTH)
            : product.description
        )
    
    // Get category slug
    const category_slug = product.category.slug;
    const product_slug = product.slug

    return (
        <div className='p-3'>
            <div className={`card ${styles.cardHover}`}>
                <div className={`${styles.cardImgWrapper}`}>
                    <Link to={`/dishes/${category_slug}/${product_slug}`}>
                        <img
                            className={`card-img-top ${styles.cardImgZoom} w-100 h-100`}
                            src={`${BaseURL}${product.image}`}
                            alt="Image of Dish"
                        />
                    </Link>
                </div>
                <div className="card-body">
                    <div className='d-flex mb-3 justify-content-between'>
                        <a href={`/dishes/${category_slug}/${product_slug}`} className={`link-effect`}>
                            <h5 className="card-title" style={{ fontSize: '16px' }}>
                                {product.name}
                            </h5>
                        </a>
                        <span className="lato-bold" style={{ color: 'rgb(var(--orange))', fontSize: '16px' }}>
                            {`₦${product.price}`}
                        </span>
                    </div>
                    <p className="card-text">
                        {displayFullText}
                        {product.description.length > MAX_LENGTH && (
                            <span
                                className={`${styles.spanHover} ms-1`}
                                onClick={toggleFullText}
                                style={{ color: 'rgb(var(--orange))', cursor: 'pointer' }}
                            >
                                {expanded ? 'show less' : 'show more'}
                            </span>
                        )}
                    </p>

                    {/* If children are passed, render them, else show "Order Now" button */}
                    {children ? children : (
                        <button
                            className={`btn border w-100 ${styles.orderHover}`}
                            onClick={() => navigate(`/dishes/${category_slug}/${product_slug}`)}
                        >
                            Order Now
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card
