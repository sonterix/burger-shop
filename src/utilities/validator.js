const lengthError = (value, element, valueLength) => {
  if (value.length >= valueLength) {
    element.classList.remove('wrong')
    element.classList.add('right')
    return false
  } else {
    element.classList.remove('right')
    element.classList.add('wrong')
    return true
  }
}

export {
  lengthError
}