import React from 'react'
import PropTypes from 'prop-types'
import BurgerItem from 'components/Bugrer/BurgerItem/BurgerItem'
import BuildControls from 'components/Bugrer/BuildControls/BuildControls'
import styles from './Burger.module.scss'

const Burger = props => {
  const {ingredients, ingredientsOrder, addIngredient, removeIngredient, disabledButtons, totalPrice, checkout, showPopup} = props

  return (
    <div className={`wrapper ${ styles.burger__wrapper }`}>
      <BurgerItem ingredients={ingredientsOrder} />
      <BuildControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        disabledButtons={disabledButtons}
        totalPrice={totalPrice}
        checkout={checkout}
        showPopup={showPopup}
      />      
    </div>
  )
}

Burger.propTypes = {
  ingredients: PropTypes.object,
  ingredientsOrder: PropTypes.array,
  addIngredient: PropTypes.func,
  removeIngredient: PropTypes.func,
  disabledButtons: PropTypes.object,
  totalPrice: PropTypes.string,
  checkout: PropTypes.bool,
  showPopup: PropTypes.func
}

export default Burger
