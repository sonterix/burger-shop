import React from 'react'
import { createPortal } from 'react-dom' 
import PropTypes from 'prop-types'
import styles from './Modal.module.scss'

const Modal = ({ modal, hideModal, children }) => createPortal(
  <>
    { modal
      && <div className={ styles.modal__wrapper }>
        <div className={ styles.modal__overlay } onClick={ hideModal }></div>
        <div className={ styles.modal__content }>
          { children }
        </div>
      </div>
    }
  </>,
  document.body
)

Modal.propTypes = {
  modal: PropTypes.bool,
  hideModal: PropTypes.func
}

Modal.defaultProps = {
  modal: false,
  hideModal: () => {}
}

export default Modal