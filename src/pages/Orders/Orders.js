import React, { Component } from 'react'
import { DATABASE_URL, ORDERS_URL } from 'api/apiConstants'
import Order from 'pages/Orders/Order/Order'
import styles from './Orders.module.scss'

class Orders extends Component {
  state = {
    orders: []
  }

  handleGetOrders = async () => {
    const { hideLoader } = this.props
    try {
      const response = await fetch(`${ DATABASE_URL }${ ORDERS_URL }`)
      const responseData = await response.json()
      
      this.setState({
        orders: Object.values(responseData).reverse()
      }, hideLoader())
      hideLoader()
    } catch (error) {
      const { showModal } = this.props
      hideLoader()
      showModal('Error with getting orders')
    }
  }

  componentDidMount = () => {
    this.handleGetOrders()
  }

  render () {
    const { orders } = this.state

    return (
      <div className="wrapper">
        <h1 className={ styles.orders_title }>Orders</h1>
        <div className={ styles.orders_list }>
          { orders.map((order, index) => <Order key={ index } order={ order } />) }
        </div>
      </div>
    )
  }
}

export default Orders