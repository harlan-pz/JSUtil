import { INCREASE, DECREASE} from '../constants/actionTypes'

export const increase = (value = 1) => {
  return {
    type: INCREASE,
    payload: value
  }
}

export const decrease = (value = 1) => {
  return {
    type: DECREASE,
    payload: value
  }
}
