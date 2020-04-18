import React from 'react'
import PropTypes from 'prop-types'
import styles from './BurgerIngredient.module.scss'

const BurgerIngredient = ({ type }) => {
  if (type === 'bread__top') {
    return (
      <div className={ styles.bread__top }>
        <div className={ styles.seeds__1 }></div>
        <div className={ styles.seeds__2 }></div>
      </div>
    )
  } else {
    return <div className={ styles[type] }></div>
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string
}

export default BurgerIngredient