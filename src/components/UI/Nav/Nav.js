import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'

const Nav = ({ navItems }) => (
  <nav className={styles.nav__wrapper}>
    <ul>
      { navItems.map(navItem => (
          <li key={`${ navItem.text }_${ navItem.link }`}>
            <NavLink to={ navItem.link } className={ styles.nav__item } exact>{ navItem.text }</NavLink>
          </li>
        ))
      }
    </ul>
  </nav>
)

Nav.propTypes = {
  navItems: PropTypes.array
}

export default Nav
