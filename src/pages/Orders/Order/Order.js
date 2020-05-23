import React from 'react'
import PropTypes from 'prop-types'
import styles from './Order.module.scss'

const Order = ({ order: { deliveryMethod = 'none', ingredients = {}, totalPrice = '0' } }) => {

  return (
    <div className={ styles.order_wrapper }>
      <ul className={ styles.ingredients }>
        { Object.values(ingredients).map(({ count, label }, index) => <li key={ index }>{ label } - <span>{ count }</span></li>) }
      </ul>
      <div className={ styles.delivery }>
        Delivery: <span>{ deliveryMethod }</span>
      </div>
      <div className={ styles.total }>
        Total Price: <span>{ totalPrice }</span>
      </div>
    </div>
  )
}

Order.propTypes = {
  order: PropTypes.shape({
    deliveryMethod: PropTypes.string,
    ingredients: PropTypes.object,
    totalPrice: PropTypes.string
  })
}

Order.defaultProps = {
  order:{
    deliveryMethod: 'none',
    ingredients: {},
    totalPrice: '0'
  }
}

export default Order
