import React from 'react'
import PropTypes from 'prop-types'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import styles from './BurgerIngredients.module.scss'

const BurgerIngredients = ({ ingredientsOrder }) => (
  <div className={ styles.BurgerIngredientsWrapper }>
    <BurgerIngredient ingredientType="breadTop" />

    { ingredientsOrder.length
      ? ingredientsOrder.map((type, index) => <BurgerIngredient key={ index } ingredientType={ type } />)
      : <p>Select some ingredients</p>
    }
    
    <BurgerIngredient ingredientType="breadBottom" />
  </div>
)

BurgerIngredients.propTypes = {
  ingredientsOrder: PropTypes.array
}

BurgerIngredients.defaultProps = {
  ingredientsOrder: []
}

export default BurgerIngredients
