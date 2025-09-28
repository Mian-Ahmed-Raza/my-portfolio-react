import React from 'react'
import styles from './About.module.css'
import theme_pattern from '../../Assets/theme_pattern.svg'
import profilePic from '../../Assets/about_profile.png'

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

                    <p>Hi, I'm a passionate web developer with a knack for creating dynamic and responsive web applications. My journey in web development started a few years ago, and since then, I've been honing my skills in various technologies.</p>
                    <p>I'm particularly skilled in JavaScript, React, and Node.js, and I love working on projects that challenge me to think outside the box.</p>

                </div>

                <div className={styles.aboutSkills}>

                    <div className={styles.aboutSkill}>
                        <p>HTML & CSS</p>
                        <hr style={{ width: '50%' }} />
                    </div>

                    <div className={styles.aboutSkill}>
                        <p>React JS</p>
                        <hr style={{ width: '70%' }} />
                    </div>

                    <div className={styles.aboutSkill}>
                        <p>JavaScript</p>
                        <hr style={{ width: '60%' }} />
                    </div>

                    <div className={styles.aboutSkill}>
                        <p>Node JS</p> 
                        <hr style={{ width: '50%' }} />
                    </div>

                </div>

            </div>

        </div>

        <div className={styles.aboutAchievements}>

            <div className={styles.aboutAchievement}>
                <h1>10+</h1>
                <p>Years of Experience</p>
            </div>

            <hr />

            <div className={styles.aboutAchievement}>
                <h1>90+</h1>
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