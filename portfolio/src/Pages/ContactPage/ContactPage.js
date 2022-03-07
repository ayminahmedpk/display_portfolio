

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
                setSuccessMessage('Thank you! Your mail has been successfully sent.');
            },
            (error) => {
                setResult('error');
                setErrorMessage(error.text);
            }
        );
    };


    return (
        <div className="content">

            {result=='success' ? <p className="success-message">{successMessage}</p> : '' }

            <h2 className={result=='success'? 'page-name hidden' : 'page-name'}>
                Contact Me
            </h2>

            {result=='error' ? <p className="error-message">Error: {errorMessage}</p> : '' }

            <form ref={form} onSubmit={sendEmail} className={`form${result=='success'? ' hidden' : ''}`}>

                <input className="form__input" type="text"  placeholder="Name"    name="name"   />
                <input className="form__input" type="email" placeholder="Email"   name="email"  />
                <input className="form__input" type="text"  placeholder="Subject" name="subject"/>

                <textarea className="form__textarea" placeholder="Your message" name="message"/>

                <input className="form__send-button" type="submit" value="Send"/>

            </form>
        </div>
    );
};


export default ContactPage;