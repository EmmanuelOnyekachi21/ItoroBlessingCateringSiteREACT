import React, { useState } from 'react'
import HeroSection from './HeroSection';
import ServicesOverview from './ServicesOverview';
import CateringGallery from './CateringGallery';

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
    <section className=''>
      <HeroSection />
      <ServicesOverview />
      <CateringGallery />
    </section>
  )
}

export default CateringPage