import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Burger from 'components/Bugrer/BurgerItem/BurgerItem'
import styles from './Order.module.scss'

const Order = ({ ingredientsOrder, confirmOrder, location: { pathname }, match: { path }, history: { goBack } }) => {
  return (
    <div className={ styles.order_wrapper }>
      <h1>We hope it tastes well!</h1>
      <div className={ styles.order_burger }>
        <Burger ingredients={ ingredientsOrder } />
      </div>
      { !pathname.includes('contact-info')
        && <div className={ styles.order_actions }>
          <button className="btn" onClick={ () => goBack() }>Cancel</button>
          <button className={ `btn ${ styles.order_btnOrder }` } onClick={ () => confirmOrder() }>Confirm</button>
        </div>
      }
    </div>
  )
}

Order.propTypes = {
  ingredientsOrder: PropTypes.array
}

Order.defaultProps = {
  ingredientsOrder: []
}

export default withRouter(Order)
