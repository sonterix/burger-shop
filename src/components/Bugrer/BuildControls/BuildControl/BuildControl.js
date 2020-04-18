import React from 'react'
import PropTypes from 'prop-types'
import styles from './BuildControl.module.scss'

const BuildControl = ({ label, addIngredient, removeIngredient, disabledLess }) => (
  <div className={ styles.control__wrapper }>
    <p className={ styles.control_label }>{ label }</p>
    <button onClick={ removeIngredient } className={ `btn ${ styles.control__btn } ${ styles.control__btnLess }` } disabled={ disabledLess }>Less</button>
    <button onClick={ addIngredient } className={ `btn ${ styles.control__btn } ${ styles.control__btnMore }` }>More</button>
  </div>
)

BuildControl.propTypes = {
  label: PropTypes.string,
  addIngredient: PropTypes.func,
  removeIngredient: PropTypes.func,
  disabledButton: PropTypes.bool
}

export default BuildControl
