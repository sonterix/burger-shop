import React from 'react'
import PropTypes from 'prop-types'
import styles from './BurgerIngredient.module.scss'

const BurgerIngredient = ({ ingredientType }) => (
  <>
    { ingredientType === 'breadTop' 
      ? <div className={ styles.breadTop }>
          <div className={ styles.seeds1 }></div>
          <div className={ styles.seeds2 }></div>
        </div>
      : <div className={ styles[ingredientType] }></div>
    }
  </>
)

BurgerIngredient.propTypes = {
  ingredientType: PropTypes.string
}

BurgerIngredient.defaultProps = {
  ingredientType: ''
}

export default BurgerIngredient