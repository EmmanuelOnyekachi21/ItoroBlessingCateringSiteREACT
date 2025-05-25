import React, { useEffect, useState } from 'react'
import useNigerianStates from '../../hooks/useNigerianStates'
import { useHandleChange } from '../../hooks/useHandleChange';
import api from '../../api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import HandleAPIErrors from '../../utils/HandleAPIErrors';

const Register = () => {
    const allStates = useNigerianStates;
    const [message, setMessage] = useState('Creating Account');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        date_of_birth: '',
        phone_number: '',
        password: '',
        confirm_password: '',
        address: '',
        state: '',
        city: '',
    })
    const handleChange = useHandleChange(setFormData);
    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        api.post('api/auth/register/', formData)
            .then((res) => {
                console.log(res.data.message);
                toast.success(res.data.message, { autoClose: 10000 })
                setLoading(false);
                resetForm();
            })
            .catch((err) => {
                console.log(err?.response?.data)
                HandleAPIErrors(err)
                setLoading(false)
            })
    }
    const resetForm = () => {
        setFormData(
            prev => (
                {
                    ...prev,
                    first_name: '',
                    last_name: '',
                    email: '',
                    date_of_birth: '',
                    phone_number: '',
                    password: '',
                    confirm_password: '',
                    address: '',
                    state: '',
                    city: '',
                }
            )
        )
    }
    return (
        <div className='bg-light' style={{ padding: '5rem' }}>
            <div className='border rounded' style={{ maxWidth: "800px", margin: "0 auto" }}>
                <div className="bg-white pt-3 px-5">
                    <h3 className='poppins-semibold'>Create an account</h3>
                    <p className='text-muted lato-regular mb-3'>Enter your Information to create an account</p>
                    <p className="lato-bold">Personal Information</p>

                    <form onSubmit={handleSubmit} className='row g-3'>
                        <div className="col-12 col-md-6">
                            <label className='form-label' htmlFor="first_name">First Name</label>
                            <input className='form-control' value={formData.first_name} onChange={handleChange} type="text" name='first_name' placeholder='Emmanuel' required />
                        </div>
                        <div className="col-12 col-md-6">
                            <label className='form-label' htmlFor="last_name">Last Name</label>
                            <input className='form-control' value={formData.last_name} onChange={handleChange} type="text" name='last_name' placeholder='Nnabugwu' required />
                        </div>
                        <div className="col-12">
                            <label className='form-label' htmlFor="email">Email</label>
                            <input className='form-control' value={formData.email} onChange={handleChange} type="email" name="email" id="email" required />
                        </div>
                        <div className="col-12 col-md-6">
                            <label className='form-label' htmlFor="dob">Date of Birth</label>
                            <input className='form-control' value={formData.date_of_birth} onChange={handleChange} type="date" name="date_of_birth" id="date_of_birth" required />
                        </div>
                        <div className="col-12 col-md-6">
                            <label className='form-label' htmlFor="phone_number">Phone Number</label>
                            <input className='form-control' value={formData.phone_number} onChange={handleChange} type="phone" name="phone_number" id="phone_number" required />
                        </div>
                        <div className="col-12 col-md-6">
                            <label className='form-label' htmlFor="password">Password</label>
                            <input className='form-control' value={formData.password} onChange={handleChange} type="password" name="password" id="passwd" required />
                        </div>
                        <div className="col-12 col-md-6">
                            <label className='form-label' htmlFor="confirm_password">Confirm Password</label>
                            <input className='form-control' value={formData.confirm_password} onChange={handleChange} type="password" name="confirm_password" id="confirm_passwd" required />
                        </div>

                        <p className="lato-bold mt-3">Primary Delivery Address</p>

                        <div className="col-12">
                            <label className='form-label' htmlFor="address">Street Address</label>
                            <input className='form-control' value={formData.address} onChange={handleChange} type="text" name="address" id="address" placeholder='123 Alexander street' required />
                        </div>
                        <div className="col-12 col-md-6">
                            <label className='form-label' htmlFor="state">State</label>
                            <select
                                className="form-select"
                                name="state"
                                onChange={handleChange}
                                value={formData.state}
                            >
                                <option value="" disabled hidden>State of residence</option>
                                {
                                    allStates.map((state) => (
                                        <option value={state} key={state}>{state}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="col-12 col-md-6">
                            <label className='form-label' htmlFor="state">City</label>
                            <input value={formData.city} className='form-control' onChange={handleChange} type="text" name="city" id="city" required />
                        </div>
                        <button disabled={loading} type="submit" className="btn text-white my-5" style={{ backgroundColor: 'rgb(var(--orange))' }}>{loading ? message : 'Create Account'}</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register