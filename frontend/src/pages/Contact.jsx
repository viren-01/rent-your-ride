import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Contact.css';

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="contact-div">
                <div className="contact-div__text">
                    <h2>Need additional information?</h2>
                    <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-phone"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path></svg> &nbsp; (123) 456-7869</a>
                    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg> &nbsp; carrental@carmail.com</a>
                    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-location"><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path></svg>&nbsp; Noida, India</a>
                </div>
                <div className="contact-div__form">
                    <form>

                        <label>Full Name <b>*</b></label>
                        <input type="text" placeholder="E.g: &quot;John&quot;" />

                        <label>Email <b>*</b></label>
                        <input type="email" placeholder="youremail@example.com" />

                        <label>Tell us about it <b>*</b></label>
                        <textarea placeholder="Write Here.."></textarea>

                        <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="tabler-icon tabler-icon-mail-opened"><path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path><path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"></path><path d="M3 19l6 -6"></path><path d="M15 13l6 6"></path></svg>&nbsp; Send Message</button>
                    </form>
                </div>
            </div>
        </>
    );
}
