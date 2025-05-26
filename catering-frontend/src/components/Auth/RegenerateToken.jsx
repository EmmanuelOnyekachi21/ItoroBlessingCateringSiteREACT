import React, { useState } from 'react'
import api from '../../api';
import HandleAPIErrors from '../../utils/HandleAPIErrors';
import { toast } from 'react-toastify';

const RegenerateToken = () => {
    const [formData, setFormData] = useState({
        email: '',
    })

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) =>
        (
            { ...prev, [name]: value }
        )
        )
    }

    const [buttonIsClicked, setButtonIsClicked] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        setButtonIsClicked(true)

        api.post('api/auth/regenerate-token/', formData)
            .then(res => {
                toast.success(res.data.message)
                setLoading(false)
            })
            .catch(err => {
                HandleAPIErrors(err);
                setLoading(false)
            })

    }

    return (
        <div className='bg-light' style={{ padding: '5rem' }}>
            <div className='border rounded' style={{ maxWidth: "800px", margin: "0 auto" }}>
                <div className="bg-white pt-3 px-5">
                    <h2>Regenerate Token</h2>

                    <form onSubmit={handleSubmit} className='mt-4'>
                        <div className="">
                            <label htmlFor="email" className='form-label'>Email:</label>
                            <input type="email" value={formData.email} onChange={handleChange} className='form-control' name="email" id="email" placeholder='Enter Email Address' required />
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <button type="submit" disabled={loading} className="btn text-white my-5 w-50" style={{ backgroundColor: 'rgb(var(--orange))' }}>{loading ? 'Sending Token' : 'Get Token'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegenerateToken