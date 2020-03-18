import React, { Component } from 'react'
import Modal from 'components/UI/Modal/Modal'
import OrderSummary from 'components/Bugrer/BuildControls/OrderSummary/OrderSummary'
import Burger from 'components/Bugrer/Burger'

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: {
          label: 'Cheese',
          type: 'cheese',
          count: 0,
          price: 0.6
        },
        meat: {
          label: 'Meat',
          type: 'meat',
          count: 0,
          price: 1.4
        },
        bacon: {
          label: 'Bacon',
          type: 'bacon',
          count: 0,
          price: 0.8
        },
        salad: {
          label: 'Salad',
          type: 'salad',
          count: 0,
          price: 0.3
        }
    },
    ingredientsOrder: [],
    totalDefaultPrice: 4,
    totalPrice: 4,
    checkout: false,
    checkoutPopup: false
  }

  convertTotalPriceHandler = total => {
    return `$${ total.toFixed(2) }`
  }

  addIngredientHandler = type => {
    const currentIngredient = this.state.ingredients[type]
    const newCount = currentIngredient.count + 1
    const updatedIngredients = {...this.state.ingredients}
    updatedIngredients[type].count = newCount

    const updatedIngredientsOrder = [...this.state.ingredientsOrder]
    updatedIngredientsOrder.push(updatedIngredients[type].type)

    this.updateTotalPriceHandler('add', updatedIngredients, updatedIngredientsOrder, currentIngredient)
  }

  removeIngredientHandler = type => {
    const currentIngredient = this.state.ingredients[type]

    if (currentIngredient.count > 0) {
      const newCount = currentIngredient.count - 1
      const updatedIngredients = {...this.state.ingredients}
      updatedIngredients[type].count = newCount

      const updatedIngredientsOrder = [...this.state.ingredientsOrder]
      updatedIngredientsOrder.splice(updatedIngredientsOrder.lastIndexOf(updatedIngredients[type].type), 1)
  
      this.updateTotalPriceHandler('remove', updatedIngredients, updatedIngredientsOrder, currentIngredient)
    }
  }

  updateTotalPriceHandler = (action, updatedIngredients, updatedIngredientsOrder, currentIngredient) => {
    let newTotalPrice = this.state.totalPrice

    if (action === 'add') {
      newTotalPrice += currentIngredient.price
    } else if (action === 'remove' && newTotalPrice >= this.state.totalDefaultPrice) {
      newTotalPrice -= currentIngredient.price
    }

    this.setState({
      ingredients: updatedIngredients,
      ingredientsOrder: updatedIngredientsOrder,
      totalPrice: newTotalPrice
    })

    this.updateCheckoutHandler(updatedIngredients)
  }

  updateCheckoutHandler = ingredients => {
    let totalIngredients = 0

    for (let ingredient in ingredients) {
      totalIngredients += ingredients[ingredient].count
    }

    this.setState({
      checkout: totalIngredients > 0
    })
  }

  toggleCheckoutPopupHandler = () => {
    console.log(1)
    this.setState((prevState, props) => {
      return {checkoutPopup: !prevState.checkoutPopup}
    })
  }

  render() {
    const disabledButtons = {...this.state.ingredients}
    for (let button in disabledButtons) {
      disabledButtons[button] = disabledButtons[button].count === 0
    }

    return (
      <>
        <Modal showPopup={this.state.checkoutPopup} hidePopup={this.toggleCheckoutPopupHandler}>
          <OrderSummary ingredients={this.state.ingredients} totalPrice={this.convertTotalPriceHandler(this.state.totalPrice)} />
        </Modal>
        <Burger
          ingredientsOrder={this.state.ingredientsOrder}
          ingredients={this.state.ingredients}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledButtons={disabledButtons}
          totalPrice={this.convertTotalPriceHandler(this.state.totalPrice)}
          checkout={this.state.checkout}
          showPopup={this.toggleCheckoutPopupHandler}
        />
      </>
    )
  }
}
