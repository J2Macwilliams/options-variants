export const ADD_OPTION = "ADD_OPTION"
export const DELETE_OPTION = "DELETE_OPTION"

export const ADD_PRODUCT = "ADD_PRODUCT"
export const UPDATE_VALUE = "UPDATE_VALUE"
export const DELETE_PRODUCT = "DELETE_PRODUCT"

export const createOption = option => {
  console.log('ACTION-addOption', option)
  return {
    type: ADD_OPTION,
    payload: option
  } 
}

export const removeOption = option => {
  console.log('deleteOption')
  return {
    type: DELETE_OPTION,
    payload: option
  }
}

export const createProduct = product => {
  console.log('ACTION-createProduct', product)
  return {
    type: ADD_PRODUCT,
    payload: product
  } 
}