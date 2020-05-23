import React from 'react'

import styles from './NoOrder.module.scss'
import { Link } from 'react-router-dom'
import SadEmoji from 'components/Icons/SadEmoji'

const NoOrder = () => {
  return (
    <div className={ styles.no_order }>
      <SadEmoji />
      <h1>Order is not found</h1>
      <p>Please <Link to="/">Build your Burger</Link></p>
    </div>
  )
}

export default NoOrder
