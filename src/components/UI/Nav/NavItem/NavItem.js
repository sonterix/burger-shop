import React from 'react'
import PropTypes from 'prop-types'

const NavItem = ({ link, text, ...otherProps }) =>  (
  <li>
    <a href={ link } {...otherProps}>{ text }</a> 
  </li>
)

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default NavItem
