import React from 'react'
import styles from './Footer.module.css'
import footer_logo from '../../assets/logo_professional.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {

    return (

        <div className={styles.footer}>

            <div className={styles.footerTop}>

                <div className={styles.footerTopLeft}>
                    <img src={footer_logo} alt="Footer Logo" width={200} loading="lazy" />
                    <p>This is my personal portfolio website. Connect with me to see more of my work and get in touch!</p>
                </div>

                <div className={styles.footerTopRight}>

                    <div className={styles.footerEmailInput}>

                        <img src={user_icon} alt="user icon" />
                        <input type="email" placeholder='Enter Your Email' />

                    </div>

                    <div className={styles.footerSubscribe}>Subscribe</div>

                </div>

            </div>

            <hr />

            <div className={styles.footerBottom}>

                <p className={styles.footerBottomLeft}>&copy; {new Date().getFullYear()} Carry Williams. All rights reserved.</p>

                <div className={styles.footerBottomRight}>

                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with Me</p>

                </div>

            </div>

        </div>

    )

}

export default Footer