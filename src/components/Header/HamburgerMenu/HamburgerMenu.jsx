import React from 'react'
import PropTypes from 'prop-types'
import styles from './HamburgerMenu.module.scss'

const HamburgerMenu = ({ openMobileNav }) => (
  <div className={ styles.HamburgerMenuWrapper } onClick={ openMobileNav }>
    <div className={ styles.HamburgerMenuIcon }>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
)

HamburgerMenu.propTypes = {
  openMobileNav: PropTypes.func
}

HamburgerMenu.defaultProps = {
  openMobileNav: () => {}
}

export default HamburgerMenu
