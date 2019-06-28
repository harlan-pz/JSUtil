import { INCREASE, DECREASE } from '../constants/actionTypes'

const reducer = (state = { count: 0 }, action) => {
  switch(action.type) {
    case INCREASE:
      return Object.assign({}, state, { count: state.count + action.payload})
    case DECREASE:
      return Object.assign({}, state, { count: state.count - action.payload})
    default: 
      return state
  }
}

export  default reducer