

import React, {useRef} from 'react';

import emailjs from '@emailjs/browser';




// import './ContactPage.scss';


const ContactPage = () => {

    const emailjs_api_key = process.env.REACT_APP_EMAILJS_API_KEY;

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t0ast16', 'template_0oors83', form.current, emailjs_api_key)
            .then((result) => { console.log(result.text); e.target.reset() },
            (error)        => { console.log(error.text);  }
        );

    };


    return (
        <div className="content">
            <h2>
                Contact Form
            </h2>

            <form ref={form} onSubmit={sendEmail} className="mail-form">

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