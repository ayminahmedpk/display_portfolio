

import React, {useRef, useState} from 'react';

import emailjs from '@emailjs/browser';




// import './ContactPage.scss';


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

            <form ref={form} onSubmit={sendEmail} className={`mail-form${result=='success'? ' hidden' : ''}`}>

                <input type="text"  className="input" placeholder="Name"    name="name"   />
                <input type="email" className="input" placeholder="Email"   name="email"  />
                <input type="text"  className="input" placeholder="Subject" name="subject"/>

                <textarea placeholder="Your message" name="message"/>

                <input type="submit" value="SEND"/>

            </form>
        </div>
    );
};


export default ContactPage;