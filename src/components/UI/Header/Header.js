import React, { useState } from 'react'
import Nav from 'components/UI/Nav/Nav'
import MobNav from 'components/UI/Nav/MobNav/MobNav'
import Logo from 'components/UI/Logo/Logo'
import HamburgerMenu from './HamburgerMenu/HamburgerMenu'
import styles from './Header.module.scss'

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const toggleMobileNavHandler = () => {
    setMobileNav(!mobileNav)
  }

  const navItems = [
    {link: '/', text: 'Home', active: true},
    {link: '/burder', text: 'Burger', active: false},
    {link: '/checkout', text: 'Checkout', active: false},
  ]

  return (
    <>
      <MobNav navItems={navItems} moileNav={mobileNav} toggleMobileNav={toggleMobileNavHandler} />
      <header className={styles.toolbar__wrapper}>
        <div className="wrapper">
          <div className={styles.toolbar__content}>
            <HamburgerMenu toggleNav={toggleMobileNavHandler} />
            <Logo />
            <Nav navItems={navItems} />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header


