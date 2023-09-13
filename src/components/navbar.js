import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../images/logo.jpg';
import links from '../links.json';

import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

import styles from './navbar.module.scss';

const navlinks = [
    {name: 'Home', url:''},
    {name: 'Events', url: 'events'},
    {name: 'Mentorship Program', url: 'mentorship-program'},
    {name: 'Our Team', url: 'our-team'},
    {name: 'Contact Us', url: 'contact-us'},]

export default function Navbar() {
    const [active, setActive] = useState(false)
    const toggleActive = () => {
      setActive(!active)
    }

    return (
        <div className={styles.navbar_container}>
            <div className={styles.navbar_left_container}>
                <img src={Logo} href='' className="logo"></img>
                <Link href='' className={styles.navbar_logo}>Math Club at UC Davis</Link>
            </div>
          <div className={styles.navbar_right_container}>
            <div className={`${styles.navbar_links} ${active? styles.active : null}`}>
              {navlinks.map((navlink, index) => {
                return (
                  <Link 
                    href={`/${navlink.url}`} 
                    className={styles.nav_link}
                    onClick={() => setActive(false)}
                    key={index}>
                      {navlink.name}
                  </Link>
                )
              })}
            </div>
            <a target='_blank' href= {links["aggieLife"]}>
              <button className={styles.register_button}>Join Us</button>
            </a>
            <button 
                className={styles.hamburger_menu}
                onClick={toggleActive}>
                {active? <RxCross1/> : <RxHamburgerMenu/>}
            </button>
          </div>
        </div>
    );
  }
