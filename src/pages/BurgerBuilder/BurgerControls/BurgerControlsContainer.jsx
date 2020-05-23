import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addIngredientAction, removeIngredientAction } from 'store/burgerBuilder/actions'
import BurgerControls from './BurgerControls'

const BurgerControlsContainer = props => {
  const { ingredients, ingredientsOrder, totalPrice } = useSelector(({ burgerBuilder }) => burgerBuilder)

  const dispatch = useDispatch()
  const addIngredient = ingredient => dispatch(addIngredientAction(ingredient))
  const removeIngredient = ingredient => dispatch(removeIngredientAction(ingredient))

  const updatedProps = {
    ...props,
    ingredients,
    ingredientsOrder,
    totalPrice,
    addIngredient,
    removeIngredient
  }

  return <BurgerControls { ...updatedProps } />
}

export default BurgerControlsContainer
