import React, { lazy } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router'

const Checkout = ({ ingredientsOrder }) => {
  const OrderNotFound = lazy(() => import('./OrderNotFound/OrderNotFound'))
  const OrderInfo = lazy(() => import('./OrderInfo/OrderInfoContainer'))
  const OrderForm = lazy(() => import('./OrderForm/OrderFormContainer'))
  const OrderSuccess = lazy(() => import('./OrderSuccess/OrderSuccess'))

  return (
    <div className="wrapper">
      <Switch>
        <Route path="/checkout" component={ ingredientsOrder.length ? OrderInfo : OrderNotFound } exact />
        <Route path="/checkout/order-form" component={ ingredientsOrder.length ? OrderForm : OrderNotFound } />
        <Route path="/checkout/order-success" component={ OrderSuccess } />
      </Switch>
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
