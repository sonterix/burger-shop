import React from 'react'
import PropTypes from 'prop-types'
import styles from './OrderSummary.module.scss'

const OrderSummary = ({ ingredients, totalPrice, togglePopup, orderNow }) => (
  <div className={ styles.orderSummary__wrapper }>
    <h3>Your Order:</h3>
    <p>A delicious burger with the following ingredients:</p>
    <ul>
      { Object.values(ingredients).map(ingredient => 
        <li key={ `${ ingredient.type } + ${ ingredient.count }`}>
          { ingredient.label }: <span>{ ingredient.count }</span>
        </li>
      )}
    </ul>
    <p className={ styles.orderSummary__total }>Total: { totalPrice }</p>
    <div className={ styles.orderSummary__actions }>
      <button className="btn invert" onClick={ togglePopup }>Cancel</button>
      <button className={ `btn ${ styles.orderSummary__btnOrder }` } onClick={ orderNow }>Order Now</button>
    </div>
  </div>
)

OrderSummary.protoType = {
  ingredients: PropTypes.object,
  totalPrice: PropTypes.string,
  togglePopup: PropTypes.func,
  orderNow: PropTypes.func
}

export default OrderSummary
