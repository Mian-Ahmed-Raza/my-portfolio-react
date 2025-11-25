import React from 'react'
import styles from './Contact.module.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

    const [state, handleSubmit] = useForm("xvgwzdjw");
    const [showSuccess, setShowSuccess] = React.useState(false);
    const formRef = React.useRef(null);
    
    React.useEffect(() => {
        if (state.succeeded) {
            setShowSuccess(true);
            if (formRef.current) {
                formRef.current.reset();
            }
            setTimeout(() => setShowSuccess(false), 8000);
        }
    }, [state.succeeded]);

    return (

        <div id='contact' className={styles.contact}>

            <div className={styles.contactTitle}>

                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="theme pattern" width={130} height={130} loading="lazy" />

            </div>

            <div className={styles.contactSection}>

                <div className={styles.contactLeft}>

                    <h1>Let's Talk</h1>
                    <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

                    <div className={styles.contactDetails}>

                        <div className={styles.contactDetail}>
                            <img src={mail_icon} alt="mail icon" />
                            <p>carrywilliamsorg@gmail.com</p>
                        </div>

                        <div className={styles.contactDetail}>
                            <img src={location_icon} alt="location icon" />
                            <p>Munich, Germany</p>
                        </div>

                    </div>

                </div>

                <form ref={formRef} onSubmit={handleSubmit} className={styles.contactRight} method='POST'>
                    {showSuccess && (
                        <div className={styles.successMessage}>
                            <span className={styles.successIcon}>✓</span>
                            <div>
                                <strong>Message Sent Successfully!</strong>
                                <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                            </div>
                        </div>
                    )}

                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder='Your Name' required name='name' />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder='Enter Your Email' required name='email' />
                    <label htmlFor="message">Write Your Message Here</label>
                    <textarea id="message" rows="8" placeholder='Enter Your Message' required name='message'></textarea>
                    <button className={styles.contactSubmit} type="submit" disabled={state.submitting}>
                        {state.submitting ? 'Sending...' : 'Submit Now'}
                    </button>

                </form>

            </div>

        </div>

    )

}

export default Contact