import React, { useEffect, useRef, useState } from 'react'
import styles from './Home.module.css'
import FeaturedDishes from './FeaturedDishes'
import CateringSection from './CateringSection'
import { useAnimation, useInView } from 'framer-motion'
import Testimonial from './Testimonial'
import CTASection from './CTASection'
import api from '../../api'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()

  const goToMenu = () => {
    navigate('/menu')
  }

  const goToCatering = () => {
    navigate('/catering')
  }


  const [featuredProducts, setFeaturedProducts] = useState([])
  useEffect(() => {
    api.get('api/dish/featured-dishes')
    .then(res => {
      // console.log(res.data)
      setFeaturedProducts(res.data)
    })
    .catch(err => console.log(err.message))
  }, [featuredProducts])
  return (
    <>
      <section className={`${styles.hero}`}>
        <div className={`${styles.overlay}`}></div>
        <div className={`${styles.content} ps-md-4`} style={{}}>
          <div className=''>
            <h2 className={`poppins-bold mb-3 ${styles.headerDescribe}`}>
              Delicious Food for Every Occasion
            </h2>
            <p className={`${styles.description} poppins-regular mb-4`}>
              Homemade meals made with love. Order for delivery or book our catering services for your special events.
            </p>

          </div>
          <div className={`d-flex flex-md-row flex-column gap-3 ${styles.buttonDiv}`}>
            <button className={`btn text-white py-2 fs-5 px-4 ${styles.button2Hover}`} onClick={goToMenu}>Order Food</button>
            <button className={`btn text-white py-2 fs-5 px-4 border-white ${styles.button1Hover}`} onClick={goToCatering}>Book Catering</button>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className='pb-5 mt-5 bg-light'>
        <FeaturedDishes featuredDishes={featuredProducts} />
      </section>

      {/* Catering services Section */}
      <section className="bg-white mt-2">
        <CateringSection />
      </section>

      <section className="bg-light my-5 pt-5">
        <Testimonial />
      </section>

      <section className="mt-5" style={{ backgroundColor: 'rgb(var(--orange))' }}>
        <CTASection />
      </section>

    
    </>
  )
}

export default Home