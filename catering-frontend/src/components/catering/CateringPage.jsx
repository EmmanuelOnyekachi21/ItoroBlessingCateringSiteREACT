import React, { useRef, useState } from 'react'
import HeroSection from './HeroSection';
import ServicesOverview from './ServicesOverview';
import CateringGallery from './CateringGallery';
import BookingSection from './BookingSection';
import { Mail, Phone } from 'lucide-react';

const CateringPage = () => {
  const cateringRef = useRef();

  const scrollToCatering = () => {
    cateringRef.current?.scrollIntoView({ 'behavior': 'smooth', 'block': 'start' })
    window.scrollTo({ top: cateringRef.current.offsetTop - 80, behavior: 'smooth' })
  }
  return (
    <section className='bg-light'>
      <HeroSection onRequestCateringClick={scrollToCatering} />
      <ServicesOverview />
      <CateringGallery />
      <div className="mt-5">
        <div id='catering-form' ref={cateringRef}  className='container-fluid mb-5'>
          <BookingSection />
        </div>
      </div>

      <div className="py-5">
        <div className="py-3 container">
          <h3 className="text-center poppins-bold">
            Or Contact Us Directly
          </h3>
          <div className='d-flex justify-content-center mt-4 gap-4'>
            <div> <Phone style={{ color: 'rgb(var(--orange))' }}/> <span className='lato-regular'>+234 9025188065</span> </div>
            <div> <Mail style={{ color: 'rgb(var(--orange))' }}/> <span className='lato-regular'>catering@itoroeats.com</span> </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CateringPage