// First one reducer, if it gets out of hand Abstract
// Conventions
import {
  ADD_OPTION,
  DELETE_OPTION,
  ADD_PRODUCT
} from '../Actions/index'


const initialState = {
  // options: new Set([{
  //   title: '',
  //   values: new Set()
  // }])
  options: [],
  products: []
}

export const reducer = (state = initialState, action) => {
  console.log('reducer is working', action)
  switch (action.type) {
    
    // case ADD_OPTION:
    //   console.log('ReducerCase',  action.payload, )
    //  console.log('state.options.length,', state.options.length)

    //   return {
    //     ...state,
    //     options: [...state.options, action.payload]
        
    //   }
    
    // case DELETE_OPTION:
    //   console.log('deleteOption_Reducer', action.payload)
     
    //   return {
    //     ...state,
    //   }

    case ADD_PRODUCT:
      console.log('addProduct_Reducer', action.payload)
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    // case UPDATE_PRODUCT:
    //   console.log('updateValue_Reducer', action.payload)
    //   return {

    //   }
    // case DELETE_PRODUCT:
    //   console.log('deleteValue_Reducer', action.payload)
    //   return {

    //   }
    default:
      return state;
  }
}

