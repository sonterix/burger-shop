import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'
import { DELIVERY_METHODS } from 'utilities/appSettings'
import { convertPrice } from 'utilities/converter'
import { lengthError } from 'utilities/validator'
import { placeOrder } from 'api/apiCalls'
import styles from './OrderForm.module.scss'

const OrderForm = ({ ingredients, totalPrice, setAlert, resetCurrentOrder }) => {
  const { push } = useHistory()

  const initialFormData = {
    username: '',
    phone: '',
    address: '',
    delivery: DELIVERY_METHODS[0].price
  }
  const [ formError, setFormError ] = useState(true)
  const [ formData, setFormData ] = useState(initialFormData)
  const { username, phone, address, delivery } = formData

  const usernameField = useRef()
  const phoneField = useRef()
  const addressField = useRef()
  const deliveryField = useRef()

  const handleFormChanges = ({ target: { name, value }}) => {
    let error = false

    error = lengthError(username, usernameField.current, 2)
    error = lengthError(phone, phoneField.current, 5)
    error = lengthError(address, addressField.current, 8)

    setFormError(error)
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmitForm = async event => {
    event.preventDefault()
    if (formError) return

    const data = {
      ingredients,
      buyer: formData,
      totalPrice: convertPrice((+totalPrice + +delivery), 'full')
    }

    const orderStatus = await placeOrder(data)
    if (orderStatus) {
      resetCurrentOrder()
      push('/checkout/OrderSuccess')
    } else {
      setAlert('Error with placing the order. Please, try again')
    }
  }

  return (
    <div className={ styles.OrderFormWrapper }>
      <h3>Delivery</h3>
      <form className={ styles.OrderForm } onSubmit={ event => handleSubmitForm(event) }>
        <input type="text" name="username" placeholder="Your name" ref={ usernameField } value={ username } onChange={ event => handleFormChanges(event) } />

        <input type="number" name="phone" placeholder="Your phone" ref={ phoneField } value={ phone } onChange={ event => handleFormChanges(event) } />

        <input type="text" name="address" placeholder="Your address" ref={ addressField } value={ address } onChange={ event => handleFormChanges(event) } />

        <select name="delivery" ref={ deliveryField } value={ delivery } onChange={ event => handleFormChanges(event) }>
          { DELIVERY_METHODS.map(({ name, price }, index) => <option key={ index } value={ price }>{ name } - { convertPrice(price, 'sign') }</option>) }
        </select>

        <button type="submit" className="continue" disabled={ formError }>Continue</button>
      </form>
    </div>
  )
}

OrderForm.propTypes = {
  ingredients: PropTypes.object,
  totalPrice: PropTypes.string,
  setAlert: PropTypes.func,
  resetCurrentOrder: PropTypes.func
}

OrderForm.defaultProps = {
  ingredients: {},
  totalPrice: '0',
  setAlert: () => {},
  resetCurrentOrder: () => {}
}

export default OrderForm
