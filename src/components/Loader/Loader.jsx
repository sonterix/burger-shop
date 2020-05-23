import React from 'react'
import PropTypes from 'prop-types'
import styles from './Loader.module.scss'

const Loader = ({ dark }) =>  (
  <div className={ `${ styles.LoaderWrapper } ${ dark ? styles.dark : null }` }>
    <div className={ styles.LoaderSpinner }></div>
  </div>
)

Loader.propTypes = {
  dark: PropTypes.bool
}

Loader.defaultProps = {
  dark: true
}

export default Loader
