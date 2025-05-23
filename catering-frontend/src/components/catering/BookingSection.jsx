import React, { useEffect, useRef, useState } from 'react'
import api from '../../api.js'
import { Check } from 'lucide-react'
import buttonStyles from '../home/Home.module.css'
import { toast } from 'react-toastify'


const BookingSection = () => {
    const [eventTypes, setEventTypes] = useState([]);
    const [guestCount, setGuestCount] = useState([]);
    const topRef = useRef();

    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone_number: '',
        event_type: '',
        event_date: '',
        number_of_guests: '',
        venue_location: '',
        special_requests: '',
        additional_info: '',
    })
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        api.get('/api/bookings/get-booking-events')
            .then(res => {
                setEventTypes(res.data.event_types);
                setGuestCount(res.data.number_of_guests)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData, [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        setMessage('Waiting to submit')
        setTimeout(() => {
            api.post('/api/bookings/create/', formData)
                .then(res => {
                    setSubmitted(true);
                    setLoading(false)
                    setMessage(res.data.message);
                    toast.success('Catering request submitted');
                    // alert(res.data.message);
                })
                .catch(err => {
                    console.log(err.message);
                    setLoading(false)
                })
        }, 20000);
    }

    const resetForm = () => {
        setFormData({
            full_name: '',
            email: '',
            phone_number: '',
            event_type: '',
            event_date: '',
            number_of_guests: '',
            venue_location: '',
            special_requests: '',
            additional_info: '',
        });
        setSubmitted(false);
    };

    // Scroll to top
    useEffect(() => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [submitted])

    // Dots animation
    const [dots, setDots] = useState('');
    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setDots(prev => prev.length < 3 ? prev + '.' : '')
            }, 1000);

            return () => clearInterval(interval)
        }
    }, [loading])


    if (!submitted) {
        return (
            <>
                <h1 className='poppins-semibold text-center'>Request Catering</h1>
                <p className="text-center text-muted my-4" style={{ fontSize: "1.2rem" }}>
                    Fill out the form below to request catering for your event, and we'll get back to you within 24 hours.
                </p>
                <div className='border rounded' style={{ maxWidth: "800px", margin: "0 auto" }}>

                    <form onSubmit={handleSubmit} className='p-4 bg-white'>
                        <div className="mb-3">
                            <label htmlFor="fullname" className="form-label"><span>Full Name</span> <span className='fw-bold text-danger'>*</span> </label>
                            <input type="text" name='full_name' className="form-control" id="full-name" placeholder="Enter your Full Name" onChange={handleChange} value={formData.full_name} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email <span className='fw-bold text-danger'>*</span></label>
                            <input type="email" onChange={handleChange} value={formData.email} name='email' className="form-control" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone <span className='fw-bold text-danger'>*</span></label>
                            <input type="tel" value={formData.phone_number} onChange={handleChange} className="form-control" name='phone_number' id="phone" placeholder="Enter your phone number" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="eventType" className="form-label">Event Type <span className='fw-bold text-danger'>*</span></label>
                            <select value={formData.event_type} onChange={handleChange} name='event_type' className="form-select" aria-label="Default select example">
                                <option value="" disabled hidden>Select Event Type</option>
                                {
                                    eventTypes.map(([label, value]) => (
                                        <option key={label} value={label}>{value}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="eventDate" className="form-label">Event Date <span className='fw-bold text-danger'>*</span></label>
                            <input value={formData.event_date} onChange={handleChange} type="date" name='event_date' className="form-control" id="eventDate" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="guestCount" className="form-label">Guest Count</label>
                            <select value={formData.number_of_guests} onChange={handleChange} name='number_of_guests' className="form-select" aria-label="Default select example">
                                <option value="" disabled hidden>Select Guest Count</option>
                                {
                                    guestCount.map(([label, value]) => (
                                        <option value={label} key={label}>{value}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='venue' className='form-label'>Venue Location</label>
                            <input value={formData.venue_location} onChange={handleChange} type='text' name='venue_location' className='form-control' id='venue' placeholder='Enter the venue name and address' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='dietary' className='form-label'>Dietary Restrictions</label>
                            <textarea rows={4} value={formData.special_requests} onChange={handleChange} name='special_requests' className='form-control' id='dietary' placeholder='Enter any dietary restrictions or preferences'></textarea>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='dietary' className='form-label'>Additional Information</label>
                            <textarea rows={4} value={formData.additional_info} onChange={handleChange} name='additional_info' className='form-control' id='dietary' placeholder='Tell us more about your events and catering needs..'></textarea>
                        </div>

                        <div className='text-center mt-3'></div>
                        <button type='submit' disabled={loading} className='btn w-100 text-white' style={{ backgroundColor: 'rgb(var(--orange))' }}>{loading ? `${message}${dots}` : 'Submit Catering Request'}</button>
                        {/* <p className='text-muted'>By submitting this form, you agree to our <a href='/terms' className='text-danger'>terms and conditions</a>.</p> */}
                    </form>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="booking-fade">
                    <h1 ref={topRef} className='poppins-semibold text-center'>Request Catering</h1>
                    <p className="text-center text-muted my-4 d-none" style={{ fontSize: "1.2rem" }}>
                        Fill out the form below to request catering for your event, and we'll get back to you within 24 hours.
                    </p>
                    <div className='d-flex align-items-center justify-content-center' style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <div>
                            <div className='d-flex justify-content-center my-3'>
                                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(13, 243, 97, 0.2)', width: '5rem', height: '5rem' }}>
                                    <Check size={32} className='text-success' style={{ width: '2.5rem', height: '2.5rem' }} />
                                </div>
                            </div>
                            <h3 className="text-center poppins-bold">Thank you!</h3>
                            <p className='text-muted'>
                                Your catering request has been submitted successfully. We'll contact you shortly to discuss the details.
                            </p>
                            <div className="d-flex justify-content-center">
                                <button onClick={resetForm} className='btn w-50 text-white' style={{ backgroundColor: 'rgb(var(--orange))' }}>Submit Another Request</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default BookingSection