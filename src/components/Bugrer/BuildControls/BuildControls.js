import React from 'react'
import PropTypes from 'prop-types'
import styles from './BuildControls.module.scss'
import BuildControl from './BuildControl/BuildControl'

const BuildControls = ({ ingredients, addIngredient, removeIngredient, totalPrice, checkout, showModal }) => {
  const ingredientsValues = Object.values(ingredients)

  return (
    <div className={ styles.controls__wrapper }>
      <p className={ styles.controls__total }>Total Price: <span>{ totalPrice }</span></p>
      { ingredientsValues.length > 0
        ? ingredientsValues.map(ingredien => <BuildControl
            key={ ingredien.label }
            label={ ingredien.label }
            disabledLess={ ingredien.count === 0 }
            addIngredient={ () => addIngredient(ingredien.type) }
            removeIngredient={ () => removeIngredient(ingredien.type) }
          />)
        : <p>No ngredients found</p>
      }
      <button onClick={ showModal } className={ `btn ${ styles.order__btn }` } disabled={ !checkout }>Order Now</button>
    </div>
  )
}

BuildControls.propTypes = {
  ingredients: PropTypes.object,
  addIngredient: PropTypes.func,
  removeIngredient: PropTypes.func,
  totalPrice: PropTypes.string,
  checkout: PropTypes.bool,
  showPopup: PropTypes.func
}

export default BuildControls
