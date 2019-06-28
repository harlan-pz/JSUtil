import { INCREASE, DECREASE } from '../constants/actionTypes'
import { handleActions} from 'redux-actions'

const reducer = handleActions({
  [INCREASE]: (state, action) => (Object.assign({}, state, { count: state.count + action.payload.payload})),
  [DECREASE]: (state, action) => (Object.assign({}, state, { count: state.count - action.payload.payload}))
}, {
  count: 0
})

export  default reducer