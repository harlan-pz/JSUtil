import { INCREASE, DECREASE } from '../constants/actionTypes'
import { createAction } from 'redux-actions'
const increase = createAction(INCREASE, (count = 1) => count)
const decrease = createAction(DECREASE, (count = 1) => count)

export {
  increase,
  decrease
}