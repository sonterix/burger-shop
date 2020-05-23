import React from 'react'
import { createPortal } from 'react-dom' 
import PropTypes from 'prop-types'
import styles from './Modal.module.scss'

const Modal = ({ children, dark, closeAction }) => createPortal(
  <div className={ `${ styles.ModalWrapper } ${ dark ? styles.dark : null }` }>
    <div className={ styles.ModalOverlay } onClick={ closeAction }></div>
    <div className={ styles.ModalContent }>{ children }</div>
  </div>,
  document.body
)

Modal.propTypes = {
  dark: PropTypes.bool,
  closeAction: PropTypes.func
}

Modal.defaultProps = {
  dark: true,
  closeAction: () => {}
}

export default Modal