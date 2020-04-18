import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import Modal from 'components/UI/Modal/Modal'
import Loader from 'components/UI/Loader/Loader'

const withModalAndLoading = WrappedComponent => {
  class WithModalAndLoading extends Component {

    state = {
      loading: true,
      loadingWithDarkMode: true,
      modal: false,
      message: ''
    }

    handleShowLoader = (dark = true) => {
      this.setState({
        loading: true,
        loadingWithDarkMode: dark
      })
    }
    
    handleHideLoader = () => {
      this.setState({
        loading: false
      })
    }

    handleShowModal = msg => {
      this.setState({
        modal: true,
        message: msg
      })
    }

    handleHideModal = () => {
      this.setState({
        modal: false,
        message: ''
      })
    }
    
    render () {
      const { loading, loadingWithDarkMode, modal, message } = this.state
      const newProps = {
        ...this.props,
        showLoader: dark => this.handleShowLoader(dark),
        hideLoader: this.handleHideLoader,
        showModal: msg => this.handleShowModal(msg),
        hideModal: this.handleHideModal
      }

      return (
        <>
          { loading && createPortal(<Loader dark={ loadingWithDarkMode } />, document.body) }
          { modal && createPortal(<Modal modal={ modal } hideModal={ this.handleHideModal }>{ message }</Modal>, document.body) }
          <WrappedComponent { ...newProps } />
        </>
      )
    }
  }

  WithModalAndLoading.displayName = `WithModalAndLoading(${ WrappedComponent.displayName || WrappedComponent.name || 'Component' })`
  return WithModalAndLoading
}

export default withModalAndLoading