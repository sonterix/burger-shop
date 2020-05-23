import React from 'react'
import BurgerItem from './BurgerIngredients'
import { useSelector } from 'react-redux'

const BurgerItemContainer = props => {
  const { ingredientsOrder } = useSelector(({ burgerBuilder }) => burgerBuilder)

  const updatedProps = {
    ...props,
    ingredientsOrder
  }

  return <BurgerItem { ...updatedProps } />
}

export default BurgerItemContainer
