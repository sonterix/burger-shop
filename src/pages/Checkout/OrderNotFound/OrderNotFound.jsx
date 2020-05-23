import React from 'react'
import { Link } from 'react-router-dom'
import styles from './OrderNotFound.module.scss'

const OrderNotFound = () => (
  <div className={ styles.OrderNotFound }>
    Please, <Link to="/">build your Burger</Link>
  </div>
)

export default OrderNotFound
