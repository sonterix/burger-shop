import React from 'react'
import PropTypes from 'prop-types'
import styles from './Loader.module.scss'

const Loader = ({ message, dark }) =>  (
  <div className={ `${ styles.loader__wrapper } ${ dark ? styles.dark : null }` }>
    { message 
      ? <div className={ styles.loader__message }>{ message }</div>
      : <div className={ styles.loader__spinner }></div>
    }
  </div>
)

Loader.defaultProps = {
  dark: false
}

Loader.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.string, PropTypes.bool
  ]),
  dark: PropTypes.bool
}

export default Loader
