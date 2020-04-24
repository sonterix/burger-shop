import React, { Component } from 'react'
import Modal from 'components/UI/Modal/Modal'
import OrderSummary from 'components/Bugrer/BuildControls/OrderSummary/OrderSummary'
import Burger from 'components/Bugrer/Burger'
import { DATABASE_URL, INGREDIENTS_URL } from 'constants.js'
import withError from 'hoc/withModalAndLoading'

class BurgerBuilder extends Component {
  state = {
    ingredients: {},
    ingredientsOrder: [],
    totalPrice: 4,
    checkoutModal: false,
  }

  handleConvertTotalPrice = total => `$${ total.toFixed(2) }`

  handleGetIngredients = async () => {
    const { hideLoader, showModal } = this.props
    
    try {
      const ingredientsResponse = await fetch(`${ DATABASE_URL }${ INGREDIENTS_URL }`)
      const ingredientsData = await ingredientsResponse.json()
      
      this.setState({
        ingredients: ingredientsData
      }, () => {
        hideLoader()
      })
    } catch (error) {
      showModal('Error with fetching data from database')
    }
  } 

  handleAddIngredient = type => {
    const { ingredients, ingredientsOrder, totalPrice } = this.state

    const updatedIngredients = { ...ingredients }
    updatedIngredients[type].count++

    this.setState({
      ingredients: updatedIngredients,
      ingredientsOrder: [ ...ingredientsOrder, type],
      totalPrice: totalPrice + updatedIngredients[type].price
    })
  }

  handleRemoveIngredient = type => {
    const { ingredients, ingredientsOrder, totalPrice } = this.state

    const updatedIngredients = { ...ingredients }
    if (updatedIngredients[type].count > 0) {
      updatedIngredients[type].count--
    }

    const updatedIngredientsOrder = [ ...ingredientsOrder ]
    updatedIngredientsOrder.splice(updatedIngredientsOrder.lastIndexOf(type), 1)

    this.setState({
      ingredients: updatedIngredients,
      ingredientsOrder: updatedIngredientsOrder,
      totalPrice: totalPrice - updatedIngredients[type].price
    })
  }

  componentDidMount () {
    this.handleGetIngredients()
  }

  render () {
    const { ingredients, ingredientsOrder, totalPrice, checkoutModal } = this.state

    return (
      <>
        <Modal modal={ checkoutModal } hideModal={ () => this.setState({ checkoutModal: false }) }>
          <OrderSummary
            ingredients={ ingredients }
            ingredientsOrder={ ingredientsOrder }
            totalPrice={ this.handleConvertTotalPrice(totalPrice) }
            togglePopup={ () => this.setState({ checkoutModal: false }) }
          />
        </Modal>
        <Burger
          ingredientsOrder={ ingredientsOrder }
          ingredients={ ingredients }
          addIngredient={ this.handleAddIngredient }
          removeIngredient={ this.handleRemoveIngredient }
          totalPrice={ this.handleConvertTotalPrice(totalPrice) }
          checkout={ ingredientsOrder.length > 0 }
          showModal={ () => this.setState({ checkoutModal: true }) }
        />
      </>
    )
  }
}

export default withError(BurgerBuilder)