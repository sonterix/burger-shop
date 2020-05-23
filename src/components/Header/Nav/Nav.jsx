import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './Nav.module.scss'

const Nav = ({ navItems }) => (
  <nav className={ styles.NavWrapper }>
    <ul>
      { navItems.map(({ text, link }, index) => (
        <li key={ index }>
          <NavLink to={ link } className={ styles.NavItem } exact>{ text }</NavLink>
        </li>
      )) }
    </ul>
  </nav>
)

Nav.propTypes = {
  navItems: PropTypes.array
}

Nav.defaultProps = {
  navItems: []
}

export default Nav
