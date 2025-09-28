import React from 'react'
import styles from './Services.module.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {

  return (

    <div id='services' className={styles.services}>

        <div className={styles.servicesTitle}>

            <h1>My Services</h1>

            <img src={theme_pattern} alt="theme pattern" />

        </div>

        <div className={styles.servicesContainer}>

            {Services_Data.map((service, index) => {

                return <div key={index} className={styles.servicesFormat}>
                    
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>

                    <div className={styles.servicesReadmore}>

                        <p>Read More</p>
                        <img src={arrow_icon} alt="arrow icon" />

                    </div>

                </div>

            })}

        </div>

    </div>

  )

}

export default Services