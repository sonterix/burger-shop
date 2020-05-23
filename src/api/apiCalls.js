import { DATABASE_URL, ORDERS_URL } from "./apiConstants"

const placeOrder = async data => {
  try {
    const response = await fetch(`${ DATABASE_URL }${ ORDERS_URL }`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    const { name = '' } = await response.json()

    if (name.length) {
      return true
    } else {
      return false
    }
  } catch {
    return false
  }
}

export {
  placeOrder
}