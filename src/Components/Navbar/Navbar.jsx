import React, { useState } from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Navbar() {

  const [menu, setMenu] = useState("home");

  return (

    <div className={styles.navbar}>

      <img src={logo} alt="" width={150} />

      <ul className={styles.navMenu}>

        <li>
          <AnchorLink className={styles.anchorLink} href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>{menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink className={styles.anchorLink} offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About me</p>
          </AnchorLink>{menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink className={styles.anchorLink} offset={50} href='#services'>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>{menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink className={styles.anchorLink} offset={50} href='#work'>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>{menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink className={styles.anchorLink} offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>{menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>

      </ul>

      <div className={styles.navContact}>

        <AnchorLink className={styles.anchorLink} offset={50} href='#contact'>Connect with me</AnchorLink>

      </div>

    </div>
  )

}