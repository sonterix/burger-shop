import React from 'react'
import logo from 'assets/images/logo.png'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <a href="/" className={styles.logo__wrapper}>
      <img src={logo} alt="logo" />
    </a>
  )
}

export default Logo
