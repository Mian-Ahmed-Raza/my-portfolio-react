import React, { useState, useRef } from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

export default function Navbar() {

  const [menu, setMenu] = useState("home");

  const menuRef= useRef();

  const openMenu=() => {
    menuRef.current.style.right="0";
  }

  const closeMenu=() => {
    menuRef.current.style.right="-350px";
  }

  return (

    <div className={styles.navbar}>

      <img src={logo} alt="Ahmed Raza Portfolio Logo" width={300} />

      <img src={menu_open} onClick={openMenu} alt="menu open" className={styles.navMobOpen} />

      <ul ref={menuRef} className={styles.navMenu}>

        <img src={menu_close} onClick={closeMenu} alt="menu close" className={styles.navMobClose} />

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