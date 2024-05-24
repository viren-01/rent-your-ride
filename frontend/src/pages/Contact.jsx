import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../css/Contact.css';
import { contact } from '../store/slices/CommonSlice'
import { toast } from 'react-toastify';

export default function Contact() {
    const [inputFields, setInputFields] = useState({})
    const [error, setError] = useState({})

    const handleChange = (key, value) => {
        if(value) {
            const existingErr = error
            delete existingErr[key]
            setError(existingErr)
        }

        setInputFields((prev) => ({ ...prev, [key]: value }))
    }

    const handleContact = async (event) => {
        event.preventDefault()
        const isFormValid = validateForm()
        if(isFormValid) return

        const response = await contact(inputFields)
        if (response?.message) {
            toast.success(response.message)
            setInputFields({})
        }
    }

    const validateForm = () => {
        const keys = ['name', 'email', 'description']
        let error = false
        const errors = {}

        for (let key of keys) {
            if (!inputFields[key]) {
                errors[key] = 'This field is required'
                error = true
            }

            else if (key === 'name' || key === 'description') {
                if (key === 'name' && inputFields[key].length < 3) {
                    error = true
                    errors[key] = 'Please enter atleast 4 characters'
                }
                if (key === 'description' && inputFields[key].length < 20) {
                    error = true
                    errors[key] = 'Please enter atleast 20 characters'
                }
            }
        }

        if (Object.keys(errors).length) setError(errors)
        return error
    }

    return (
        <>
            <Navbar />
            <div className="contact-div">
                <div className="contact-div__text">
                    <h2>Need additional information?</h2>
                    <p>Welcome to our Contact Page! Whether you have questions about our car booking process, need assistance with your reservation, or want to provide feedback, we’re here to help. Reach out to us through the form, and our dedicated team will get back to you promptly.</p>
                    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-phone"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path></svg> &nbsp; (123) 456-7869</a>
                    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg> &nbsp; support@rentyourride.com</a>
                    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-location"><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path></svg>&nbsp; Noida, India</a>
                </div>
                <div className="contact-div__form">
                    <form>

                        <label>Full Name <b>*</b></label>
                        <input type="text" placeholder="E.g: &quot;John&quot;" required onChange={(e) => handleChange('name', e.target.value)} value={inputFields?.['name'] || ''} />
                        {error?.['name'] && <p className="error-modal-contact">{error['name']}</p>}

                        <label>Email <b>*</b></label>
                        <input type="email" placeholder="youremail@example.com" required onChange={(e) => handleChange('email', e.target.value)} value={inputFields?.['email'] || ''} />
                        {error?.['email'] && <p className="error-modal-contact">{error['email']}</p>}

                        <label>Tell us about it <b>*</b></label>
                        <textarea placeholder="Write Here.." onChange={(e) => handleChange('description', e.target.value)} value={inputFields?.['description'] || ''} required minLength={20}></textarea>
                        {error?.['description'] && <p className="error-modal-contact">{error['description']}</p>}

                        <button onClick={(e) => handleContact(e)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-mail-opened"><path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path><path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"></path><path d="M3 19l6 -6"></path><path d="M15 13l6 6"></path></svg>&nbsp; Send Message</button>
                    </form>
                </div>
            </div>
        </>
    );
}
