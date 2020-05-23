import { GET_INGREDIENTS, ADD_INGREDIENT, REMOVE_INGREDIENT, RESET_CURRENT_ORDER } from "./actions"

const initialState = {
  ingredients: {},
  ingredientsOrder: [],
  totalPrice: '4.00'
}

const burgerBuilderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_INGREDIENTS:
      return { ...state, ingredients: payload }

    case ADD_INGREDIENT:
      const addIngItem = { ...state.ingredients[payload] }
      addIngItem.count++

      return {
        ...state,
        ingredients: { ...state.ingredients, [payload]: addIngItem },
        ingredientsOrder: [ ...state.ingredientsOrder, payload ],
        totalPrice: (+state.totalPrice + +addIngItem.price).toFixed(2)
      }

    case REMOVE_INGREDIENT:
      const removeIngItems = { ...state.ingredients }
      const removeIngItem = removeIngItems[payload]
      const removeIngOrder = [ ...state.ingredientsOrder ]

      if (removeIngItem.count > 0) {
        removeIngItem.count--
        removeIngOrder.splice(removeIngOrder.lastIndexOf(payload), 1)
  
        return {
          ...state,
          ingredients: { ...state.ingredients, [payload]: removeIngItem },
          ingredientsOrder: removeIngOrder,
          totalPrice: (+state.totalPrice - +removeIngItem.price).toFixed(2)
        }
      } else {
        return state
      }

    case RESET_CURRENT_ORDER:
      return {
        ...state,
        ingredientsOrder: initialState.ingredientsOrder,
        totalPrice: initialState.totalPrice
      }

    default:
      return state
  }
}

export default burgerBuilderReducer