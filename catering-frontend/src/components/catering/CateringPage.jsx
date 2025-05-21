import React, { useState } from 'react'
import HeroSection from './HeroSection';
import ServicesOverview from './ServicesOverview';
import CateringGallery from './CateringGallery';
import BookingSection from './BookingSection';

const CateringPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    venue: "",
    dietary: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <section className='bg-light'>
      <HeroSection />
      <ServicesOverview />
      <CateringGallery />
      <div className="mt-5">
        <BookingSection />
      </div>
    </section>
  )
}

export default CateringPage