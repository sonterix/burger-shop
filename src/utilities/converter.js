import { CURRENCY_SIGN, CURRENCY } from './appSettings'

const convertPrice = (price, type) => {
  switch (type) {
    case 'sign': 
      return `${ CURRENCY_SIGN }${ price }`

    case 'currency': 
      return `${ price } ${ CURRENCY }`

    case 'full': 
      return `${ CURRENCY_SIGN }${ price } ${ CURRENCY }`

    default:
      return `${ price }`
  }
}

export {
  convertPrice
}