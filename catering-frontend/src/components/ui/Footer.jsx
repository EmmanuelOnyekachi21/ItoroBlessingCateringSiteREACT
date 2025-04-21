import React from 'react'
import NavBarLinks from './NavBarLinks'
import { Clock, Heart, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='text-white pt-5 pb-1' style={{ backgroundColor: '#111827' }}>
      <div className="px-3">
        <div className="row mx-auto">

          {/* Itoro Eats and Events */}
          <div className="col-12 col-md-6 mb-md-0 mb-4 col-lg-3">
            <h3 className='poppins-bold mb-3 text-start'>Itoro Eats & Events</h3>
            <p className="text-white mb-3 fs-5 text-start" style={{ width: '80%' }}>
              Delicious homemade meals and professional catering services for all your needs.
            </p>
            <div className="d-flex w-50 gap-3">
              <a href="#" className="footer-link fs-5">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="footer-link fs-5">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="footer-link fs-5">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-6 col-lg-3 mb-md-0 mb-4">
            <h3 className='poppins-bold mb-3 text-start'>Quick Links</h3>
            <div className="mb-3 text-start">
              <ul className="navbar-nav d-flex flex-column text-white" style={{ gap: '1px' }}>
                <li className="nav-item poppins-regular">
                  <a className="nav-link d-inline-block footer-link" style={{ fontSize: '16px' }} href="/">Home</a>
                </li>
                <li className="nav-item poppins-regular">
                  <a className="nav-link d-inline-block footer-link" style={{ fontSize: '16px' }} href="/menu">Menu</a>
                </li>
                <li className="nav-item poppins-regular">
                  <a className="nav-link d-inline-block footer-link" style={{ fontSize: '16px' }} href="/catering">Catering</a>
                </li>
                <li className="nav-item poppins-regular">
                  <a className="nav-link d-inline-block footer-link" style={{ fontSize: '16px' }} href="/gallery">Gallery</a>
                </li>
                <li className="nav-item poppins-regular">
                  <a className="nav-link d-inline-block footer-link" style={{ fontSize: '16px' }} href="/about">About</a>
                </li>
                <li className="nav-item poppins-regular">
                  <a className="nav-link d-inline-block footer-link" style={{ fontSize: '16px' }} href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div className="col-12 col-md-6 mb-md-0 mb-4 col-lg-3">
            <h3 className='poppins-bold mb-3 text-start'>Contact Us</h3>
            <div className="mb-3 text-start">
              <div className='d-flex gap-2 align-items-center mb-3'>
                <MapPin size={20} />
                <span className='' style={{ fontSize: '16px' }}>Shop 10, Isheri Estate, Opic, Ogun State</span>
              </div>
              <div className='d-flex gap-2 align-items-center mb-3'>
                <Phone size={20} />
                <a href="tel:+2348024620183" style={{ fontSize: '16px' }} className='footer-link'>+234 802 462 0183</a>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <Mail size={20} />
                <a href="mailto:info@itoroeats.com" style={{ fontSize: '16px' }} className='footer-link'>info@itoroeats.com</a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="col-12 col-md-6 mb-md-0 mb-4 col-lg-3">
            <h3 className='poppins-bold mb-3 text-start'>Opening Hours</h3>
            <div className="mb-3 text-start">
              <div className='d-flex gap-2 align-items-center mb-3'>
                <Clock size={20} />
                <div className='' style={{ fontSize: '16px' }}>
                  <span className='d-block'>Monday - Friday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
              </div>

              <div className='d-flex gap-2 align-items-center mb-3'>
                <Clock size={20} />
                <div className='' style={{ fontSize: '16px' }}>
                  <span className='d-block'>Saturday - Sunday</span>
                  <span>9:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-top border-secondary mt-1 pt-1 text-center text-secondary">
          <span className='d-block'>&copy; {new Date().getFullYear()} Itoro Eats & Events. All rights reserved.</span>
          <span className='p-0'>Developed with <Heart className='' style={{ color: 'red', fill: 'red' }} /> by D3MXN</span>
        </div>
      </div>

      {/* Add Bootstrap-style hover effect */}
      <style jsx='true'>{`
        .footer-link {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease-in-out;
        }

        .footer-link:hover {
          color: 	#9ca3af;
          text-decoration: none;
        }
      `}</style>
    </footer>
  )
}

export default Footer
