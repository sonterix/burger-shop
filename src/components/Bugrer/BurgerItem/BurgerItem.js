import React from 'react'
import PropTypes from 'prop-types'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import styles from './BurgerItem.module.scss'

const Burger = ({ ingredients }) => (
  <div className={ styles.burgerItem__wrapper }>
    <BurgerIngredient type="bread__top" />
    { ingredients.length > 0
      ? ingredients.map((ingredient, index) => <BurgerIngredient key={ `${ ingredient }_${ index }` } type={ ingredient } />)
      : <p>Select some ingredients</p>
    }
    <BurgerIngredient type="bread__bottom" />
  </div>
)

Burger.propTypes = {
  ingredients: PropTypes.array
}

export default Burger
