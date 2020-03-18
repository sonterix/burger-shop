import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './NavItem/NavItem'
import styles from './Nav.module.scss'

const Nav = props => {
  const {navItems} = props
  const navItemsComponents = navItems.map(navItem => {
    return <NavItem 
            key={`${ navItem.text }_${ navItem.link }`}
            link={navItem.link} 
            text={navItem.text} 
            className={navItem.active ? `${ styles.active } ${ styles.nav__item }` : styles.nav__item} 
          />
  })

  return (
    <nav className={styles.nav__wrapper}>
      <ul>
        {navItemsComponents}
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  navItems: PropTypes.array
}

export default Nav
