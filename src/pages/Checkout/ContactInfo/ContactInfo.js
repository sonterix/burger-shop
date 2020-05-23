import React from 'react'
import PropTypes from 'prop-types'
import styles from './ContactInfo.module.scss'

const ContactInfo = ({ orderNow }) => {
  return (
    <form className={ styles.contact_info_form } onSubmit={ event => orderNow(event) }>
      <h2>Contact</h2>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <select name="deliveryMethod">
        <option value="asap">ASAP - $100</option>
      </select>
      <h2>Address</h2>
      <input type="text" name="street" placeholder="Street" />
      <input type="text" name="country" placeholder="Country" />
      <input type="text" name="city" placeholder="City" />
      <input type="number" name="zip" placeholder="ZIP" />
      <button type="submit" className="btn">Order Now</button>
    </form>
  )
}

ContactInfo.propTypes = {
  orderNow: PropTypes.func
}

ContactInfo.defaultProps = {
  orderNow: () => {}
}

export default ContactInfo
