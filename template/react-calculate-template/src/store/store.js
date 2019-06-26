import { createStore } from 'redux'
import calculateReducer from '../reducers/reducers'

const store = createStore(calculateReducer)

export default store