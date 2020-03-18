import React from 'react'
import PropTypes from 'prop-types'
import styles from './BuildControls.module.scss'
import BuildControl from './BuildControl/BuildControl'

const BuildControls = props => {
  const {ingredients, addIngredient, removeIngredient, disabledButtons, totalPrice, checkout, showPopup} = props;

  const controls = Object.values(ingredients)

  return (
    <div className={styles.controls__wrapper}>
      <p className={styles.controls__total}>Total Price: <span>{totalPrice}</span></p>
      {controls.map(control => {
        return <BuildControl
                  key={control.label}
                  label={control.label}
                  addIngredient={() => addIngredient(control.type)}
                  removeIngredient={() => removeIngredient(control.type)}
                  disabledButton={disabledButtons[control.type]}
                />
      })}
      <button onClick={showPopup} className={`btn ${ styles.order__btn }`} disabled={!checkout}>Order Now</button>
    </div>
  )
}

BuildControls.propTypes = {
  ingredients: PropTypes.object,
  addIngredient: PropTypes.func,
  removeIngredient: PropTypes.func,
  disabledButtons: PropTypes.object,
  totalPrice: PropTypes.string,
  checkout: PropTypes.bool,
  showPopup: PropTypes.func
}

export default BuildControls
