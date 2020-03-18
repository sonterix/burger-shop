import React from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.scss'

const Modal = props => {
  const {showPopup, hidePopup} = props

  return (
    <div className={`${ styles.modal__wrapper } ${ showPopup ? styles.active : '' }`}>
      <div className={styles.modal__overlay} onClick={hidePopup}></div>
      <div className={styles.modal__content}>
        {props.children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  showPopup: PropTypes.bool,
  hidePopup: PropTypes.func
}

export default React.memo(Modal)