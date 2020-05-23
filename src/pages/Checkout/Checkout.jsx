import React, { lazy } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router'
import OrderNotFound from './OrderNotFound/OrderNotFound'
import styles from './Checkout.module.scss'

const Checkout = ({ ingredientsOrder }) => {
  const OrderInfo = lazy(() => import('./OrderInfo/OrderInfoContainer'))

  return (
    <div className="wrapper">
      { ingredientsOrder.length 
        ? <Switch>
            <Route path="/" component={ OrderInfo } />
          </Switch>
        : <OrderNotFound />
      }
    </div>
  )
}

Checkout.propTypes = {
  ingredientsOrder: PropTypes.array
}

Checkout.defaultProps = {
  ingredientsOrder: []
}

export default Checkout
