import React, { Component } from 'react'
import { DATABASE_URL, ORDERS_URL } from 'api/apiConstants'
import { Route } from 'react-router-dom'
import CheckoutOrder from 'pages/Checkout/CheckoutOrder'
import NoOrder from 'pages/Checkout/NoOrder/NoOrder'
import ContactInfo from 'pages/Checkout/ContactInfo/ContactInfo'

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
              <CheckoutOrder confirmOrder={ this.handleConfirmOrder } ingredientsOrder={ ingredientsOrder } />
              <Route path={ `${ path }/contact-info` } render={ () => <ContactInfo orderNow={ this.handleOrderNow } /> } />
            </>
          : <NoOrder />
        }
      </div>
    )
  }
}

export default Checkout