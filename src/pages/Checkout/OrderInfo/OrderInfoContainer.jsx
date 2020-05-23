import React from 'react'
import { useSelector } from 'react-redux'
import OrderInfo from './OrderInfo'

const OrderInfoContainer = props => {
  const { ingredients, totalPrice } = useSelector(({ burgerBuilder }) => burgerBuilder)
  
  const updatedProps = {
    ...props,
    ingredients,
    totalPrice
  }

  return <OrderInfo { ...updatedProps } />
}

export default OrderInfoContainer
