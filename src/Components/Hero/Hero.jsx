import React, { useState } from 'react'
import styles from './Hero.module.css'
import profilePic from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
const [showResumeModal, setShowResumeModal] = useState(false);

return (
    <div id='home' className={styles.hero}>

            <img src={profilePic} alt="profile" width={300} height={300} loading="eager" />

            <h1><span>I'm Carry Williams,</span> Full Stack Developer based in Germany</h1>

            <p>Passionate about building scalable full-stack applications with modern technologies, from database to deployment.</p>

            <div className={styles.heroAction}>

                <div className={styles.heroConnect}><AnchorLink className={styles.anchorLink} offset={50} href='#contact'>Connect with me</AnchorLink></div>

                <div className={styles.heroResume} onClick={() => setShowResumeModal(true)}>My Resume</div>

            </div>

            {showResumeModal && (
                <div className={styles.modalOverlay} onClick={() => setShowResumeModal(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.modalClose} onClick={() => setShowResumeModal(false)}>&times;</button>
                        <h2>Resume Request</h2>
                        <p>Thank you for your interest in my professional background!</p>
                        <p>To request my resume, please contact me directly and I'll be happy to share it with you.</p>
                        <div className={styles.modalActions}>
                            <AnchorLink className={styles.modalButton} offset={50} href='#contact' onClick={() => setShowResumeModal(false)}>Contact Me</AnchorLink>
                            <button className={styles.modalButtonSecondary} onClick={() => setShowResumeModal(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}

    </div>
)
}

export default Hero