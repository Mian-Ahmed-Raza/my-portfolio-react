import React from 'react'
import styles from './About.module.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profilePic from '../../assets/about_profile.png'

const About = () => {


  return (

    <div id='about' className={styles.about}>

        <div className={styles.aboutTitle}>

            <h1>About Me</h1>

            <img src={theme_pattern} alt="theme pattern" />

        </div>

        <div className={styles.aboutSections}>

            <div className={styles.aboutLeft}>

                <img src={profilePic} alt="Profile" width={300} height={400} />

            </div>

            <div className={styles.aboutRight}>

                <div className={styles.aboutPara}>

                    <p>Hi, I'm a passionate full stack developer specializing in building robust, scalable applications from front to back. My journey in web development started a few years ago, and since then, I've been mastering both client-side and server-side technologies.</p>
                    <p>I excel in modern JavaScript frameworks, backend APIs, database design, and cloud deployment. I love architecting complete solutions that solve real-world problems efficiently.</p>

                </div>

                <div className={styles.aboutSkills}>

                    <div className={styles.aboutSkill}>
                        <p>React & Next.js</p>
                        <hr style={{ width: '90%' }} />
                    </div>

                    <div className={styles.aboutSkill}>
                        <p>Node.js & Express</p>
                        <hr style={{ width: '85%' }} />
                    </div>

                    <div className={styles.aboutSkill}>
                        <p>MongoDB & PostgreSQL</p>
                        <hr style={{ width: '80%' }} />
                    </div>

                    <div className={styles.aboutSkill}>
                        <p>AWS & Docker</p> 
                        <hr style={{ width: '75%' }} />
                    </div>

                    <div className={styles.aboutSkill}>
                        <p>TypeScript & GraphQL</p> 
                        <hr style={{ width: '70%' }} />
                    </div>

                </div>

            </div>

        </div>

        <div className={styles.aboutAchievements}>

            <div className={styles.aboutAchievement}>
                <h1>2+</h1>
                <p>Years of Experience</p>
            </div>

            <hr />

            <div className={styles.aboutAchievement}>
                <h1>10+</h1>
                <p>Projects Completed</p>
            </div>

            <hr />

            <div className={styles.aboutAchievement}>
                <h1>15+</h1>
                <p>Happy Clients</p>
            </div>

        </div>

    </div>

  )
}




export default About