import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './OrderSummary.module.scss'

const OrderSummary = ({ ingredients, ingredientsOrder, totalPrice, togglePopup }) => (
  <div className={ styles.orderSummary__wrapper }>
    <h3>Your Order:</h3>
    <p>A delicious burger with the following ingredients:</p>
    <ul>
      { Object.values(ingredients).map(ingredient => 
        <li key={ `${ ingredient.type }_${ ingredient.count }`}>
          { ingredient.label }: <span>{ ingredient.count }</span>
        </li>
      )}
    </ul>
    <p className={ styles.orderSummary__total }>Total: { totalPrice }</p>
    <div className={ styles.orderSummary__actions }>
      <button className="btn invert" onClick={ togglePopup }>Cancel</button>
      <Link to={{
        pathname: '/checkout',
        state: { ingredients, ingredientsOrder, totalPrice }
      }} className={ `btn ${ styles.orderSummary__btnOrder }` }>Order Now</Link>
    </div>
  </div>
)

OrderSummary.protoType = {
  ingredients: PropTypes.object,
  ingredientsOrder: PropTypes.array,
  totalPrice: PropTypes.string,
  togglePopup: PropTypes.func,
}

export default OrderSummary
