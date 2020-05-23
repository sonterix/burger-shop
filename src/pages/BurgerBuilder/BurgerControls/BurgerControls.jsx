import React from 'react'
import { useHistory } from 'react-router'
import { convertPrice } from 'utilities/converter'
import PropTypes from 'prop-types'
import BuildControl from './BurgerControl/BurgerControl'
import styles from './BurgerControls.module.scss'

const BurgerControls = ({
  ingredients,
  ingredientsOrder,
  totalPrice,
  addIngredient,
  removeIngredient,
}) => {
  const { push } = useHistory()
  const ingValues = Object.values(ingredients)
  const currentTotalPrice = convertPrice(totalPrice, 'sign')
  
  return (
    <div className={ styles.BurgerControlsWrapper }>
      <p className={ styles.BurgerControlsTotal }>
        Total Price: <span>{ currentTotalPrice }</span>
      </p>

      { ingValues.length > 0
        ? ingValues.map(({ label, count, type }, index) => <BuildControl
            key={ index }
            label={ label }
            lessActive={ count === 0 }
            addIngredient={ () => addIngredient(type) }
            removeIngredient={ () => removeIngredient(type) }
          />)
        : <p className={ styles.BurgerControlsEmpty }>No ingredients found</p>
      }

      <button className={ `btn ${ styles.OrderBtn }` } onClick={ () => push('/checkout') } disabled={ !ingredientsOrder.length }>Order Now</button>
    </div>
  )
}

BurgerControls.propTypes = {
  ingredients: PropTypes.object,
  ingredientsOrder: PropTypes.array,
  totalPrice: PropTypes.string,
  addIngredient: PropTypes.func,
  removeIngredient: PropTypes.func
}

BurgerControls.defaultProps = {
  ingredients: {},
  ingredientsOrder: [],
  totalPrice: '0',
  addIngredient: () => {},
  removeIngredient: () => {}
}

export default BurgerControls
