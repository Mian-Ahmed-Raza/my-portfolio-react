import React from 'react'
import styles from './Hero.module.css'
import profilePic from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
return (
    <div id='home' className={styles.hero}>

            <img src={profilePic} alt="profile" width={300} height={300} />

            <h1><span>I'm Carry Williams,</span> Full Stack Developer based in Pakistan</h1>

            <p>Passionate about building scalable full-stack applications with modern technologies, from database to deployment.</p>

            <div className={styles.heroAction}>

                <div className={styles.heroConnect}><AnchorLink className={styles.anchorLink} offset={50} href='#contact'>Connect with me</AnchorLink></div>

                <div className={styles.heroResume}>My Resume</div>

            </div>

    </div>
)
}

export default Hero