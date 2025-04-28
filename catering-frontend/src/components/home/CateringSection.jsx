import { ArrowRight, PartyPopper, Users, Utensils } from 'lucide-react';
import styles from './CateringSection.module.css'
import Services from './Services';
import ButtonEffect from '../ui/ButtonEffect';
import cateringImage from '../../assets/images/cateringImage.jpeg'
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

const CateringSection = () => {
    const [screenWidth, setSreenWidth] = useState(window.innerWidth);
    const controls = useAnimation(); // COntrols the animation manually
    const circleRef = useRef(); // Get the div actual position
    // Checks if circle is in view and runs everytime its in view
    const isInView = useInView(circleRef, { once: false });


    useEffect(() => {
        const circle = circleRef.current
        if (circle) {
            if (isInView && screenWidth > 768) {
                const circleRect = circle.getBoundingClientRect();
                const maxX = screenWidth - circleRect.right // account for margin
                controls.start({
                    x: [0, maxX, 0], // Move across and back
                    rotate: [0, 360, 0], // Rotate in sync with movement
                    transition: {
                        duration: 5,
                        ease: 'easeInOut',
                    }
                })
            }
        }
    }, [isInView, screenWidth, controls])

    useEffect(() => {
        const handleResize= () => setSreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    const features = [
        {
            icon: <PartyPopper size={60} style={{ color: 'rgb(var(--orange))' }} />,
            title: "Special Events",
            description: "From birthdays to anniversaries, our catering services make every celebration memorable with delicious food.",
        },
        {
            icon: <Users size={60} style={{ color: 'rgb(var(--orange))' }} />,
            title: "Corporate Functions",
            description: "Impress your team and clients with our professional catering for meetings, conferences, and office parties.",
        },
        {
            icon: <Utensils size={60} style={{ color: 'rgb(var(--orange))' }} />,
            title: "Custom Menus",
            description: "We work with you to create customized menus that suit your event theme and dietary preferences.",
        },
    ];
    const title = 'Learn More About Catering';
    return (
        <div className='container-fluid'>
            <div className="row gx-3">
                <div className="col-lg-6 col-12">
                    <div className="p-3 ">
                        <h2 className="poppins-bold pb-3" style={{ fontSize: '48px' }}>
                            Catering Services for Your Special Events
                        </h2>
                        <p className={`${styles.pWidth} text-muted`}>
                            Let Itoro Blessing bring her culinary expertise to your next event. We provide full-service catering with attention to detail and flavors that will delight your guests. From intimate gatherings to large celebrations, we've got you covered.
                        </p>
                        {
                            features.map((feature, index) =>
                                <Services key={index} feature={feature} />
                            )
                        }
                        <ButtonEffect title={title} location={'/catering'} />
                    </div>

                </div>
                <div className="col-lg-6 col-12">
                    <div className="">
                        <div className="row gy-5">
                            <div className="col-lg-12 d-none d-lg-block" style={{ height: '100px' }}>
                                <div className=""></div>
                            </div>
                            <div className="col-12  position-relative">
                                <div className="">
                                    <div className={`${styles.imageWrapper}`}>
                                        <img src={cateringImage} className='w-100 h-100' alt="Catering Services" />
                                    </div>
                                </div>
                                <motion.div
                                    ref={circleRef}
                                    className={`${styles.positionCircle} d-flex flex-column align-items-center justify-content-center`}
                                    initial={{ x: 0, rotate: 0 }}
                                    animate={controls}
                                >
                                    <div className='text-white lato-bold'>
                                        <span className='d-block text-center fs-3'>100%</span>
                                        <span>Satisfaction</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CateringSection