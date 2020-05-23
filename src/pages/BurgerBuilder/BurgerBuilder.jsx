import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredientsContainer'
import BurgerControls from './BurgerControls/BurgerControlsContainer'
import styles from './BurgerBuilder.module.scss'

const BurgerBuilder = () => (
  <div className={ `wrapper ${ styles.BurgerBuilderWrapper }` }>
    <BurgerIngredients />
    <BurgerControls />
  </div>
)

export default BurgerBuilder