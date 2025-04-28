import { Calendar, MapPin, Users } from 'lucide-react'
import React from 'react'
import styles from '../ui/Card.module.css'

const ServicesOverview = () => {
    return (
        <section className='py-5 bg-light'>
            <div className="container">
                <h2 className="text-center mb-5">Our Services</h2>

                <div className="row g-4">
                    <div className={`col-md-4`}>
                        <div className={`${styles.cardHover} bg-light card h-100 text-center p-4`}>
                            <div className="mb-3 text-primary">
                                <Calendar size={40} style={{ color: 'rgb(var(--orange))' }} />
                            </div>
                            <h5 className="card-title">Event Planning</h5>
                            <p className="card-text">
                                We help you craft the perfect menu based on your event style, dietary needs, and preferences.
                            </p>
                        </div>
                    </div>

                    <div className={`col-md-4`}>
                        <div className={`${styles.cardHover} bg-light card h-100 text-center p-4`}>
                            <div className="mb-3 text-primary">
                                {/* <FaMapMarkerAlt size={40} /> */}
                                <MapPin size={40} style={{ color: 'rgb(var(--orange))' }} />
                            </div>
                            <h5 className="card-title">On-Site Service</h5>
                            <p className="card-text">
                                Our professional team will set up, serve, and clean up, ensuring a seamless event experience.
                            </p>
                        </div>
                    </div>

                    <div className={`col-md-4`}>
                        <div className={`${styles.cardHover} bg-light card h-100 text-center p-4`}>
                            <div className="mb-3 text-primary">
                                <Users size={40} style={{ color: 'rgb(var(--orange))' }} />
                            </div>
                            <h5 className="card-title">Custom Menus</h5>
                            <p className="card-text">
                            We offer customized menus tailored to your taste, event type, and budget, whether for 20 or 300+ guests.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ServicesOverview