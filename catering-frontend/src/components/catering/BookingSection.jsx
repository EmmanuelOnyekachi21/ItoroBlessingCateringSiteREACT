import React, { useEffect, useState } from 'react'
import api from '../../api.js'

const BookingSection = () => {
    const [eventTypes, setEventTypes] = useState([]);
    const [guestCount, setGuestCount] = useState([]);

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
    // console.log(eventTypes)
    // console.log(guestCount);
    useEffect(() => {
        api.get('/api/bookings/get-booking-events')
            .then(res => {
                setEventTypes(res.data.event_types);
                setGuestCount(res.data.number_of_guests)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [formData])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData, [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/api/bookings/create/', formData)
        .then(res => {
            setMessage(res.data.message);
            alert(res.data.message);
        })
        .catch(err => console.log(err.message))
    }
    console.log(formData)
    return (
        <div id='catering-form' className='container-fluid'>
            <h3 className='poppins-semibold text-center'>Request Catering</h3>
            <p className="text-center text-muted my-4" style={{ fontSize: "1.2rem" }}>
                Fill out the form below to request catering for your event, and we'll get back to you within 24 hours.
            </p>
            <div className='border border-danger' style={{ maxWidth: "800px", margin: "0 auto" }}>
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
                        <select value={formData.event_type} onChange={handleChange} name='event_type' class="form-select" aria-label="Default select example">
                            <option selected disabled hidden>Select Event Type</option>
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
                        <select value={formData.number_of_guests} onChange={handleChange} name='number_of_guests' class="form-select" aria-label="Default select example">
                            <option selected disabled hidden>Select Guest Count</option>
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
                    <button type='submit' className='btn btn-danger w-100'>Submit Catering Request</button>
                    <div className='text-center mt-3'></div>
                    {/* <p className='text-muted'>By submitting this form, you agree to our <a href='/terms' className='text-danger'>terms and conditions</a>.</p> */}
                </form>
            </div>
        </div>
    )
}

export default BookingSection