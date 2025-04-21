import React, { useState } from 'react'
import styles from './FeaturedDishes.module.css'
import CardContainer from '../ui/CardContainer'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ButtonEffect from '../ui/ButtonEffect'

const FeaturedDishes = () => {
    const FeaturedDishes = [
        {
            id: 1,
            name: "Jollof Rice Special",
            image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            price: "$12.99",
            description: "Our signature jollof rice with grilled chicken, plantains, and vegetables."
        },
        {
            id: 2,
            name: "Vegetable Egusi Soup",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            price: "$14.99",
            description: "Rich and creamy egusi soup packed with assorted meats and vegetables."
        },
        {
            id: 3,
            name: "Grilled Fish Platter",
            image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80",
            price: "$18.99",
            description: "Whole tilapia grilled to perfection, served with peppered sauce and sides."
        }
    ]
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
                        FeaturedDishes.map(
                            (dish) => <CardContainer key={dish.id} product={dish} />
                        )
                    }
                </div>
            </div>

            <div className="text-center mt-4">
                <ButtonEffect title={title} />
            </div>
        </>
    )
}

export default FeaturedDishes