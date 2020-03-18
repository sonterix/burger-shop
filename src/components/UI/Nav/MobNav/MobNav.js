import React from 'react'
import PropTypes from 'prop-types'
import Logo from 'components/UI/Logo/Logo'
import NavItem from '../NavItem/NavItem'
import styles from './MobNav.module.scss'

const MobNav = props => {
  const {moileNav, navItems, toggleMobileNav} = props
  const navItemsComponents = navItems.map(navItem => {
    return <NavItem 
            key={`${ navItem.text }_${ navItem.link }`}
            link={navItem.link} 
            text={navItem.text} 
            className={navItem.active ? `${ styles.active } ${ styles.navMob__item }` : styles.navMob__item} 
          />
  })

  return (
    <div className={moileNav ? `${ styles.navMob__wrapper } ${ styles.active }`: styles.navMob__wrapper }>
      <div className={styles.navMob__overlay} onClick={toggleMobileNav}></div>
      <div className={styles.navMob__menu}>
        <div className={styles.navMob__logo}>
          <Logo />
        </div>
        <nav className={styles.navMob__nav}>
          <ul>
            {navItemsComponents}
          </ul>
        </nav>
      </div>
    </div>
  )
}

MobNav.propTypes = {
  moileNav: PropTypes.bool,
  navItems: PropTypes.array,
  toggleMobileNav: PropTypes.func
}

export default MobNav
