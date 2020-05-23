import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Logo from 'components/Logo/Logo'
import styles from './MobNav.module.scss'

const MobNav = ({ navItems, mobileNavStatus, closeMobileNav }) => (
  <div className={`${ styles.MobNavWrapper } ${ mobileNavStatus ? styles.active : null }` }>
    <div className={ styles.MobNavOverlay } onClick={ closeMobileNav }></div>
    <div className={ styles.MobNavMenu }>
      <div className={ styles.MobNavLogo }>
        <Logo />
      </div>
      <nav className={ styles.MobNavNav }>
        <ul>
          { navItems.map(({ text, link }, index) => (
            <li key={ index }>
              <NavLink to={ link } className={ styles.MobNavItem } exact>{ text }</NavLink>
            </li>
          )) }
        </ul>
      </nav>
    </div>
  </div>
)

MobNav.propTypes = {
  navItems: PropTypes.array,
  mobileNavStatus: PropTypes.bool,
  closeMobileNav: PropTypes.func
}

MobNav.defaultProps = {
  navItems: [],
  mobileNavStatus: false,
  closeMobileNav: () => {}
}

export default MobNav
