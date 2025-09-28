import React from 'react'
import styles from './Hero.module.css'
import profilePic from '../../Assets/profile_img.svg'

const Hero = () => {
return (
    <div className={styles.hero}>

            <img src={profilePic} alt="profile" />

            <h1><span>I'm Ahmed Raza,</span> Frontend Developer based in Pakistan</h1>

            <p>Passionate about building interactive and responsive web applications using modern technologies.</p>

            <div className={styles.heroAction}>

                <div className={styles.heroConnect}>Connect with me</div>

                <div className={styles.heroResume}>My Resume</div>

            </div>

    </div>
)
}

export default Hero