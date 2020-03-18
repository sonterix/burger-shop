import React from 'react'
import PropTypes from 'prop-types'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import styles from './BurgerItem.module.scss'

const Burger = props => {
  const { ingredients } = props
  let ingreidentsArray = ingredients.map((ingredient, index) => {
      return <BurgerIngredient key={ingredient + index} type={ingredient} />
  })

  if (ingreidentsArray.length === 0) {
    ingreidentsArray = <p>Select some ingredients</p>
  }

  return (
    <div className={styles.burgerItem__wrapper}>
      <BurgerIngredient type="bread__top" />
      {ingreidentsArray}
      <BurgerIngredient type="bread__bottom" />
    </div>
  )
}

Burger.propTypes = {
  ingredients: PropTypes.array
}

export default Burger
