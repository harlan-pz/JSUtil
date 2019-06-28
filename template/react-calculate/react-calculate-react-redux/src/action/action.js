import { INCREASE, DECREASE} from '../constants/actionTypes'
import { createActions} from 'redux-actions'

const Action = createActions({
  INCREASE: (value = 1) => ({
    payload: value
  }),
  DECREASE: (value = 1) => ({
    payload: value
  })
})

export default Action
