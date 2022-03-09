

import React, {useRef, useState} from 'react';

import emailjs from '@emailjs/browser';

const ContactPage = () => {

    const [ result         , setResult         ] = useState('');
    const [ successMessage , setSuccessMessage ] = useState('')
    const [ errorMessage   , setErrorMessage   ] = useState('');

    const emailjs_api_key = process.env.REACT_APP_EMAILJS_API_KEY;

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_t0ast16', 'template_0oors83', form.current, emailjs_api_key)
            .then((result) => {
                setResult('success');
                setSuccessMessage('Your mail has been successfully sent.');
            },
            (error) => {
                setResult('error');
                setErrorMessage(error.text);
            }
        );
    };


    const contactForm = (
        <>
        <h2 className='page-name'> Contact Me </h2>
        {result=='error' ? <p className="error-message">Error: {errorMessage}</p> : '' }
        <form ref={form} onSubmit={sendEmail} className='form'>
            <input className="form__input" type="text"  placeholder="Name"    name="name"   />
            <input className="form__input" type="email" placeholder="Email"   name="email"  />
            <input className="form__input" type="text"  placeholder="Subject" name="subject"/>
            <textarea className="form__textarea" placeholder="Your message" name="message"/>
            <input className="form__send-button" type="submit" value="Send"/>    
        </form>
        </>
    )


    const successFeedback = (
        <>
        <h2 className='page-name'> Thank you! </h2>
        <p className="success-message">{successMessage}</p>
        </>
    );


    return (
        <div className="content">
            {result=='success' ? successFeedback : contactForm }
        </div>

    );

};


export default ContactPage;