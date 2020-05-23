import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getIngredientsAction } from 'store/burgerBuilder/actions'
import { unsetAlertAction } from 'store/app/actions'
import App from './App'

const AppContainer = props => {
  const { ingredients } = useSelector(({ burgerBuilder }) => burgerBuilder)
  const { loader, alert: { status, message} } = useSelector(({ app }) => app)

  const dispatch = useDispatch()
  const unsetAlert = () => dispatch(unsetAlertAction())
  const getIngredients = () => dispatch(getIngredientsAction())

  const updatedProps = {
    ...props,
    ingredients,
    loader,
    alertStatus: status,
    alertMessage: message,
    unsetAlert,
    getIngredients
  }

  return <App { ...updatedProps } />
}

export default AppContainer
