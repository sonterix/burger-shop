import React from 'react'
import PropTypes from 'prop-types'
import styles from './BurgerControl.module.scss'

const BurgerControl = ({ label, lessActive, addIngredient, removeIngredient }) => (
  <div className={ styles.BurgerControlWrapper }>
    <p>{ label }</p>

    <button
      onClick={ removeIngredient }
      className={ `btn ${ styles.BurgerControlBtn } ${ styles.BurgerControlLessBtn }` }
      disabled={ lessActive }
    >Less</button>

    <button
      onClick={ addIngredient }
      className={ `btn ${ styles.BurgerControlBtn } ${ styles.BurgerControlMoreBtn }` }
    >More</button>
  </div>
)

BurgerControl.propTypes = {
  label: PropTypes.string,
  lessActive: PropTypes.bool,
  addIngredient: PropTypes.func,
  removeIngredient: PropTypes.func
}

BurgerControl.defaultProps = {
  label: 'Ingredient',
  lessActive: false,
  addIngredient: () => {},
  removeIngredient: () => {}
}

export default BurgerControl
