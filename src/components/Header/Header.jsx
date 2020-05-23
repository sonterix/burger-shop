import React from 'react'
import { useState } from 'react'
import { NAV_ITEMS } from 'utilities/appSettings'
import MobNav from 'components/Header/MobNav/MobNav'
import HamburgerMenu from 'components/Header/HamburgerMenu/HamburgerMenu'
import Logo from 'components/Logo/Logo'
import Nav from 'components/Header/Nav/Nav'
import styles from './Header.module.scss'

const Header = () => {
  const [ mobileNavStatus, setMobileNavStatus ] = useState(false)

  return (
    <>
      <MobNav navItems={ NAV_ITEMS } mobileNavStatus={ mobileNavStatus } closeMobileNav={ () => setMobileNavStatus(false) } />
      
      <header className={ styles.HeaderWrapper }>
        <div className="wrapper">
          <div className={ styles.HeaderContent }>
            <HamburgerMenu openMobileNav={ () => setMobileNavStatus(true) } />
            <Logo />
            <Nav navItems={ NAV_ITEMS } />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header


