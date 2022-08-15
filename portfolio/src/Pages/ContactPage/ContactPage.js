

import React, {useRef, useState} from 'react';

import emailjs from '@emailjs/browser';


const ContactPage = () => {

    const [ result         , setResult         ] = useState('')   ;
    const [ successMessage , setSuccessMessage ] = useState('')   ;
    const [ errorMessage   , setErrorMessage   ] = useState('')   ;
    const [ isLoading      , setLoading        ] = useState(false);

    const emailjs_api_key = process.env.REACT_APP_EMAILJS_API_KEY;

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        const hasEmptyFields = () => {
            const fields = form.current.querySelectorAll('input, textarea');
            return ([...fields].some(field => field.value == ''));
        }

        if ( hasEmptyFields() ) {
            setErrorMessage("Fields should not be empty.");
            setResult("error");
            return;
        }

        setLoading(true);
        emailjs.sendForm('service_t0ast16', 'template_0oors83', form.current, emailjs_api_key)
            .then((result) => {
                setResult('success');
                setSuccessMessage('Your mail has been successfully sent.');
                setLoading(false);
            },
            (error) => {
                setResult('error');
                setErrorMessage(error.text);
                setLoading(false);
            }
        );
    };

    const sendButtonValue = isLoading ? 'Sending...' : 'Send';
    const formClass = 'form' + (isLoading ? ' form--loading' : '')

    // const sendButtonValue = 'Send'


    const contactForm = (
        <>
        <h2 className='page-name'> Contact Me </h2>
        {result=='error' ? <p className="error-message">Error: {errorMessage}</p> : '' }
        <form ref={form} onSubmit={sendEmail} className={formClass}>
            <div className="form__field">
                <span className='form__label'><strong>Name</strong></span>
                <input className="form__input" type="text" name="name"   />
            </div>
            <div className="form__field">
                <span className='form__label'><strong>Email</strong></span>
                <input className="form__input" type="email" name="email"  />
            </div>
            <div className="form__field">
                <span className='form__label'><strong>Subject</strong></span>
                <input className="form__input" type="text" name="subject"/>
            </div>
            <div className="form__field">
                <span className='form__label'><strong>Message</strong></span>
                <textarea className="form__textarea" name="message"/>
            </div>
            <input className="form__send-button" type="submit" value={sendButtonValue}/>
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