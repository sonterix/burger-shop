import { DATABASE_URL, INGREDIENTS_URL } from 'api/apiConstants'
import { loaderOnAction, loaderOffAction, setAlertAction } from 'store/app/actions'

const GET_INGREDIENTS = 'burgerBuilder/GET_INGREDUENTS'
const ADD_INGREDIENT = 'burgerBuilder/ADD_INGREDIENT'
const REMOVE_INGREDIENT = 'burgerBuilder/REMOVE_INGREDIENT'
const RESET_CURRENT_ORDER = 'burgerBuilder/RESET_CURRENT_ORDER'

const addIngredientAction = ingredient => ({
  type: ADD_INGREDIENT,
  payload: ingredient
})

const removeIngredientAction = ingredient => ({
  type: REMOVE_INGREDIENT,
  payload: ingredient
})

const resetCurrentOrder = () => ({
  type: RESET_CURRENT_ORDER
})

const getIngredientsAction = () => async dispatch => {
  dispatch(loaderOnAction())

  try {
    const response = await fetch(`${ DATABASE_URL }${ INGREDIENTS_URL }`)
    const ingredients = await response.json()

    dispatch({
      type: GET_INGREDIENTS,
      payload: ingredients
    })

    dispatch(loaderOffAction())
  } catch {
    dispatch(loaderOffAction())
    dispatch(setAlertAction('Error with fetching data'))
  }
}

export {
  GET_INGREDIENTS, ADD_INGREDIENT, REMOVE_INGREDIENT, RESET_CURRENT_ORDER,
  getIngredientsAction, addIngredientAction, removeIngredientAction, resetCurrentOrder
}