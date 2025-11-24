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

                return <img key={index} src={work.w_img} alt={work.w_name} loading="lazy" />

            })}

        </div>

        <div className={styles.myworkShowmore}>

            <p>Show More</p>
            <img src={arrow_icon} alt="arrow icon" />

        </div>

    </div>

  )

}

export default MyWork