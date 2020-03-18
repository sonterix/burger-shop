import React from 'react'
import PropTypes from 'prop-types'
import styles from './HamburgerMenu.module.scss'

const HamburgerMenu = props => {
  const {toggleNav} = props 

  return (
    <div className={styles.hamburger__wrapper} onClick={toggleNav}>
      <div className={styles.hamburger__icon}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

HamburgerMenu.propTypes = {
  toggleNav: PropTypes.func
}

export default HamburgerMenu
