import React from 'react'
import PropTypes from 'prop-types'
import BurgerItem from 'components/Bugrer/BurgerItem/BurgerItem'
import BuildControls from 'components/Bugrer/BuildControls/BuildControls'
import styles from './Burger.module.scss'

const Burger = ({ ingredients, ingredientsOrder, addIngredient, removeIngredient, totalPrice, checkout, showModal }) => {
  return (
    <div className={ `wrapper ${ styles.burger__wrapper }` }>
      <BurgerItem ingredients={ ingredientsOrder } />
      <BuildControls
        ingredients={ ingredients }
        addIngredient={ addIngredient }
        removeIngredient={ removeIngredient }
        totalPrice={ totalPrice }
        checkout={ checkout }
        showModal={ showModal }
      />      
    </div>
  )
}

Burger.propTypes = {
  ingredients: PropTypes.object,
  ingredientsOrder: PropTypes.array,
  addIngredient: PropTypes.func,
  removeIngredient: PropTypes.func,
  totalPrice: PropTypes.string,
  checkout: PropTypes.bool,
  togglePopup: PropTypes.func
}

export default Burger
