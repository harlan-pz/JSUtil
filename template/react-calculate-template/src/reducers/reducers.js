import { handleActions } from 'redux-actions'
import { INCREASE, DECREASE } from '../constants/actionTypes'
const calculateReducers = handleActions({
  [INCREASE]: (state, action) => state + action.payload,
  [DECREASE]: (state, action) => state - action.payload
}, 0)

export default calculateReducers