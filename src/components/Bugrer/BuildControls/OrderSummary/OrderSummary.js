import React from 'react'
import PropTypes from 'prop-types'
import styles from './OrderSummary.module.scss'

const OrderSummary = props => {
  const {ingredients, totalPrice} = props
  const summary = Object.values(ingredients).map(ingredient => {
    return <li key={ingredient.type + ingredient.count}>{ingredient.label}: <span>{ingredient.count}</span></li>
  })

  return (
    <div className={styles.orderSummary__wrapper}>
      <h3>Your Order:</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {summary}
      </ul>
      <p className={styles.orderSummary__total}>Total: {totalPrice}</p>
    </div>
  )
}

OrderSummary.protoType = {
  ingredients: PropTypes.object,
  totalPrice: PropTypes.string
}

export default OrderSummary
