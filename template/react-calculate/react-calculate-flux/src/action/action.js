import {
  INCREASE,
  DECREASE
} from '../constants/actionTypes'
import CalculateDispatcher from '../dispatcher/dispatcher'

const action = {
  increase(value = 1) {
    CalculateDispatcher.handleAction({
      type: INCREASE,
      payload: value
    })
  },
  decrease(value = 1) {
    CalculateDispatcher.handleAction({
      type: DECREASE,
      payload: value
    })
  }
} 

export default action