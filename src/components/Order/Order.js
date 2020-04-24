import React from 'react'
import PropTypes from 'prop-types'
import Burger from 'components/Bugrer/BurgerItem/BurgerItem'
import styles from './Order.module.scss'

const Order = ({ ingredients }) => {
  return (
    <div className={ styles.order_wrapper }>
      <h1>We hope it tastes well!</h1>
      <div className={ styles.order_burger }>
        <Burger ingredients={ ingredients } />
      </div>
      <div className={ styles.order_actions }>
        <button className={ `btn ${ styles.order_btnOrder }` }>Order Now</button>
        <button className="btn">Cancel</button>
      </div>
    </div>
  )
}

Order.propTypes = {
  ingredients: PropTypes.array
}

Order.defaultProps = {
  ingredients: []
}

export default Order
