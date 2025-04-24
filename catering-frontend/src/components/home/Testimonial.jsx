import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Event Organizer",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    testimonial: "Itoro's catering service exceeded all our expectations. The food was delicious, the presentation was beautiful, and her team was professional and friendly. Our corporate event was a great success thanks to her!"
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Regular Customer",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    testimonial: "I've been ordering meals from Itoro for months now, and the quality and taste are consistently excellent. The delivery is always on time, and the portions are generous. Highly recommended!"
  },
  {
    id: 3,
    name: "Amara Okafor",
    role: "Wedding Client",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    testimonial: "We hired Itoro to cater our wedding, and it was the best decision! The food was amazing, and many of our guests commented that it was the best wedding food they've ever had. She took care of everything, allowing us to enjoy our special day."
  },
  {
    id: 4,
    name: "Emmanuel Onyekachi",
    role: "Student",
    avatar: "https://randomuser.me/api/portraits/men/88.jpg",
    testimonial: "Highly recommended"
  }
];

const settings = {
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 6000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  swipe: true,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

const Testimonial = () => {
  return (
    <div className="container py-3 my-5">
      <h1 className="poppins-bold text-center">
        What Our Customers Say
      </h1>
      <p className="mt-3 text-center mx-auto text-muted" style={{ maxWidth: '600px' }}>
        Don't just take our word for it. Here's what our satisfied customers have to say about our food and service.
      </p>

      <div className="mt-5 px-1">
        <Slider {...settings}>
          {testimonials.map(testimony => (
            <TestimonialCard key={testimony.id} testimony={testimony} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
