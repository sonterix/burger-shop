import React from 'react'
import PropTypes from 'prop-types'

const NavItem = props => {
  const {link, text, ...otherProps} = props

  return (
    <li>
      <a href={link} {...otherProps}>{text}</a> 
    </li>
  )
}

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default NavItem
