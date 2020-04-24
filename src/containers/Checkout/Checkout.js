import React, { Component } from 'react'
import { DATABASE_URL, ORDERS_URL } from 'constants.js'
import { Route } from 'react-router-dom'
import Order from 'components/Order/Order'
import NoOrder from 'components/Order/NoOrder/NoOrder'
import ContactInfo from 'components/Order/ContactInfo/ContactInfo'
import withModalAndLoading from 'hoc/withModalAndLoading'

class Checkout extends Component {

  handleConfirmOrder = () => {
    const {
      history: { push },
      match: { path },
      totalPrice,
      location: { state: { ingredients, ingredientsOrder } }
    } = this.props

    push({
      pathname: `${ path }/contact-info`,
      state: { ingredients, ingredientsOrder, totalPrice }
    })
  }

  handleOrderNow = async event => {
    event.preventDefault()
    const { showLoader, totalPrice, location: { state: { ingredients, ingredientsOrder } }, history: { push } } = this.props

    showLoader()

    try {
      await fetch(`${ DATABASE_URL }${ ORDERS_URL }`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ingredients: ingredients,
          ingredientsOrder: ingredientsOrder,
          totalPrice: totalPrice,
          deliveryMethod: 'ASAP - $100',
          customer: {
            name: 'Nick Bukovskiy',
            email: 'sontTest@email.com',
            address: {
              street: 'Some street 1',
              country: 'Australia',
              city: 'Melbourne',
              zip: '32901'
            }
          }
        })
      })

      push('/')
    } catch (error) {
      const { showModal, hideLoader } = this.props
      hideLoader()
      showModal('Error with placing the order')
    }
  }

  componentDidMount = () => {
    const { hideLoader } = this.props
    hideLoader()
  }

  render () {
    const { location: { state }, match: { path } } = this.props
    const { ingredients = {}, ingredientsOrder = [] } = state || {}

    return (
      <div className="wrapper">
        { ingredientsOrder.length 
          ? <>
              <Order confirmOrder={ this.handleConfirmOrder } ingredientsOrder={ ingredientsOrder } />
              <Route path={ `${ path }/contact-info` } component={ () => <ContactInfo orderNow={ this.handleOrderNow } /> } />
            </>
          : <NoOrder />
        }
      </div>
    )
  }
}

export default withModalAndLoading(Checkout)