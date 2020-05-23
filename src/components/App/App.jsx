import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header/Header'
import Loader from 'components/Loader/Loader'
import Modal from 'components/Modal/Modal'
import styles from './App.module.scss'

const App = ({
  children,
  ingredients,
  loader,
  alertStatus,
  alertMessage,
  unsetAlert,
  getIngredients
}) => {
  useEffect(() => {
    !Object.keys(ingredients).length && getIngredients()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      { loader && <Loader /> }
      { alertStatus && <Modal closeAction={ unsetAlert() }>{ alertMessage }</Modal>}

      <Header />
      <main className={ styles.AppWrapper }>
        { children }
      </main>
    </>
  )
}

App.propTypes = {
  ingredients: PropTypes.object,
  loader: PropTypes.bool,
  alertStatus: PropTypes.bool,
  alertMessage: PropTypes.string,
  unsetAlert: PropTypes.func,
  getIngredients: PropTypes.func
}

App.defaultProps = {
  ingredients: {},
  loader: false,
  alertStatus: false,
  alertMessage: '',
  unsetAlert: () => {},
  getIngredients: () => {}
}

export default App
