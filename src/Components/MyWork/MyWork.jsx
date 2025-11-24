import React from 'react'
import styles from './MyWork.module.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {

  return (
    
    <div id='work' className={styles.myWork}>

        <div className={styles.myworkTitle}>

            <h1>My Latest Work</h1>

            <img src={theme_pattern} alt="theme pattern" width={130} height={130} loading="lazy" />

        </div>

        <div className={styles.myworkContainer}>

            {mywork_data.map((work, index) => {

                return (
                    <div key={index} className={styles.myworkCard}>
                        <img src={work.w_img} alt={work.w_name} loading="lazy" />
                        <div className={styles.myworkInfo}>
                            <h3>{work.w_name}</h3>
                            <p>{work.w_desc}</p>
                            <div className={styles.myworkTech}>
                                {work.w_tech.map((tech, i) => (
                                    <span key={i} className={styles.techBadge}>{tech}</span>
                                ))}
                            </div>
                            <div className={styles.myworkLinks}>
                                <a href={work.w_demo} target="_blank" rel="noopener noreferrer" className={styles.demoBtn}>
                                    View Demo
                                </a>
                                <a href={work.w_github} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                )

            })}

        </div>

        <div className={styles.myworkShowmore}>

            <p>View All Projects on GitHub</p>
            <img src={arrow_icon} alt="arrow icon" />

        </div>

    </div>

  )

}

export default MyWork