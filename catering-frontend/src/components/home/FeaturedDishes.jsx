import React, { useState } from 'react'
import styles from './FeaturedDishes.module.css'
import CardContainer from '../ui/CardContainer'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ButtonEffect from '../ui/ButtonEffect'

const FeaturedDishes = ({featuredDishes}) => {
    const title = 'View Full Menu'

    // Keep check on if hovered or not.
    const [isHovered, setIsHovered] = useState(false);


    return (
        <>
            <h2 className='poppins-bold text-center mb-3'>Featured Dishes</h2>
            <p className={`${styles.FDHeader} text-muted mx-auto text-center`}>
                Explore our most popular dishes, prepared with fresh ingredients and authentic flavors.
            </p>
            <div className="container-fluid px-4">
                <div className="row gx-2">
                    {
                        featuredDishes.map(
                            (dish) => <CardContainer key={dish.id} product={dish} />
                        )
                    }
                </div>
            </div>

            <div className="text-center mt-4">
                <ButtonEffect title={title} location={'/menu'} />
            </div>
        </>
    )
}

export default FeaturedDishes