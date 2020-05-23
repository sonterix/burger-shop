import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetCurrentOrderAction } from 'store/burgerBuilder/actions'
import { setAlertAction } from 'store/app/actions'
import OrderForm from './OrderForm'

const OrderFormContainer = props => {
  const { ingredients, totalPrice } = useSelector(({ burgerBuilder }) => burgerBuilder)

  const dispatch = useDispatch()
  const setAlert = message => dispatch(setAlertAction(message))
  const resetCurrentOrder = () => dispatch(resetCurrentOrderAction())

  const updatedProps = {
    ...props,
    ingredients,
    totalPrice,
    setAlert,
    resetCurrentOrder
  }

  return <OrderForm { ...updatedProps } />
}

export default OrderFormContainer
