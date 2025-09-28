import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.svg'

export default function Navbar() {
  return (

    <div className={styles.navbar}>

        <img src={logo} alt="" width={150} />

        <ul className={styles.navMenu}>

            <li>Home</li>
            <li>About me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>

        </ul>

        <div className={styles.navContact}>

            Connect with me

        </div>

    </div>
  )

}