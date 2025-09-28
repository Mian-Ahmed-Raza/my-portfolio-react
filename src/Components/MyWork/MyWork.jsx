import React from 'react'
import styles from './MyWork.module.css'
import theme_pattern from '../../Assets/theme_pattern.svg'
import mywork_data from '../../Assets/mywork_data'
import arrow_icon from '../../Assets/arrow_icon.svg'

const MyWork = () => {

  return (
    
    <div id='work' className={styles.myWork}>

        <div className={styles.myworkTitle}>

            <h1>My Latest Work</h1>

            <img src={theme_pattern} alt="theme pattern" />

        </div>

        <div className={styles.myworkContainer}>

            {mywork_data.map((work, index) => {

                return <img key={index} src={work.w_img} alt={work.w_name} />

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