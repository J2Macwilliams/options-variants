// First one reducer, if it gets out of hand Abstract
// Conventions
// import {
//   ADD_OPTION,
//   UPDATE_OPTION,
//   DELETE_OPTION,
//   ADD_VALUE,
//   UPDATE_VALUE,
//   DELETE_VALUE,
//   addOption
// } from '../Actions/index'


const initialState = {
  // options: new Set([{
  //   title: '',
  //   values: new Set()
  // }])
  options: []
}

export const reducer = (state = initialState, action) => {
  console.log('reducer is working', action)
  switch (action.type) {
    
    case "ADD_OPTION":
    //   console.log('ReducerCase',  action.payload, )
     console.log('state.options.length,', state.options.length)

      return {
        ...state,
        options: [...state.options, action.payload]
        
      }
    // case UPDATE_OPTION:
    //   console.log('updateOption_Reducer', action.payload)
    //   return {

    //   }
    // case DELETE_OPTION:
    //   console.log('deleteOption_Reducer', action.payload)
    //   return {

    //   }

    // case ADD_VALUE:
    //   console.log('addValue_Reducer', action.payload)
    //   return {

    //   }
    // case UPDATE_VALUE:
    //   console.log('updateValue_Reducer', action.payload)
    //   return {

    //   }
    // case DELETE_VALUE:
    //   console.log('deleteValue_Reducer', action.payload)
    //   return {

    //   }
    default:
      return state;
  }
}

