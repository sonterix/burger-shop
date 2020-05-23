import React from 'react'
import Checkout from './Checkout'
import { useSelector } from 'react-redux'

const CheckoutContainder = props => {
  const { ingredientsOrder } = useSelector(({ burgerBuilder }) => burgerBuilder)
  
  const updatedProps = {
    ...props,
    ingredientsOrder
  }

  return <Checkout { ...updatedProps } />
}

export default CheckoutContainder
