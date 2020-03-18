import React from 'react'
import PropTypes from 'prop-types'
import styles from './BurgerIngredient.module.scss'

const BurgerIngredient = props => {
  const { type } = props
  let ingredient = null

  if (type === 'bread__top') {
    ingredient = (
      <div className={styles.bread__top}>
        <div className={styles.seeds__1}></div>
        <div className={styles.seeds__2}></div>
      </div>
    )
  } else {
    ingredient = <div className={styles[type]}></div>
  }

  return ingredient
}

BurgerIngredient.propTypes = {
  type: PropTypes.string
}

export default BurgerIngredient