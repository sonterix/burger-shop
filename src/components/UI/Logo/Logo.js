import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'assets/images/logo.png'
import styles from './Logo.module.scss'

const Logo = () => (
  <Link to="/" className={ styles.logo__wrapper }>
    <img src={ logo } alt="logo" />
  </Link>
)

export default Logo
