import React from 'react'
import styles from './Contact.module.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

    const [state, handleSubmit] = useForm("xvgwzdjw");
    if (state.succeeded) {
        alert("Thanks for contacting me! I will get back to you soon.");
    }

    return (

        <div id='contact' className={styles.contact}>

            <div className={styles.contactTitle}>

                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="theme pattern" />

            </div>

            <div className={styles.contactSection}>

                <div className={styles.contactLeft}>

                    <h1>Let's Talk</h1>
                    <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

                    <div className={styles.contactDetails}>

                        <div className={styles.contactDetail}>
                            <img src={mail_icon} alt="mail icon" />
                            <p>ahmedmian026@gmail.com</p>
                        </div>

                        <div className={styles.contactDetail}>
                            <img src={call_icon} alt="call icon" />
                            <p>+1234567890</p>
                        </div>

                        <div className={styles.contactDetail}>
                            <img src={location_icon} alt="location icon" />
                            <p>Lahore, Pakistan</p>
                        </div>

                    </div>

                </div>

                <form onSubmit={handleSubmit} className={styles.contactRight} method='POST'>

                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder='Your Name' required name='name' />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder='Enter Your Email' required name='email' />
                    <label htmlFor="message">Write Your Message Here</label>
                    <textarea id="message" rows="8" placeholder='Enter Your Message' required name='message'></textarea>
                    <button className={styles.contactSubmit} type="submit">Submit Now</button>

                </form>

            </div>

        </div>

    )

}

export default Contact