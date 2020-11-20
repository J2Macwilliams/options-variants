export const ADD_OPTION = "ADD_OPTION"
export const UPDATE_OPTION = "UPDATE_OPTION"
export const DELETE_OPTION = "DELETE_OPTION"

export const ADD_VALUE = "ADD_VALUE"
export const UPDATE_VALUE = "UPDATE_VALUE"
export const DELETE_VALUE = "DELETE_VALUE"

export const createOption = option => {
  console.log('ACTION-addOption', option)
  return {
    type: "ADD_OPTION",
    payload: option
  } 
}
export const updateOption = option => {
  return {
    type: "UPDATE_OPTION",
    payload: option
  }
}
export const removeOption = option => {
  console.log('deleteOption')
  return {
    type: "DELETE_OPTION",
    payload: option
  }
}

export const addValue = value => {
  return {
    type: "ADD_VALUE",
    payload: value
  }
}
export const updateValue = value => {
  return {
    type: "UPDATE_VALUE",
    payload: value
  }
}
export const deleteValue = value => {
  return {
    type: "DELETE_VALUE",
    payload: value
  }
}