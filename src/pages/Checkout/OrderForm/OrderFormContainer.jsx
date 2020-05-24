import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetCurrentOrderAction } from 'store/burgerBuilder/actions'
import { setAlertAction, loaderOnAction, loaderOffAction } from 'store/app/actions'
import OrderForm from './OrderForm'

const OrderFormContainer = props => {
  const { ingredients, totalPrice } = useSelector(({ burgerBuilder }) => burgerBuilder)

  const dispatch = useDispatch()
  const setAlert = message => dispatch(setAlertAction(message))
  const resetCurrentOrder = () => dispatch(resetCurrentOrderAction())
  const loaderOn = () => dispatch(loaderOnAction())
  const loaderOff = () => dispatch(loaderOffAction())

  const updatedProps = {
    ...props,
    ingredients,
    totalPrice,
    setAlert,
    resetCurrentOrder,
    loaderOn,
    loaderOff
  }

  return <OrderForm { ...updatedProps } />
}

export default OrderFormContainer
