import CalculateDispatcher from '../dispatcher/dispatcher'
import { EventEmitter } from 'events'
import {
  INCREASE,
  DECREASE
} from '../constants/actionTypes'

const store = {
  count: 0
}

class CalculateStoreClass extends EventEmitter {
  addIncreaseListener(callBack) {
    this.on(INCREASE, callBack)
  }

  addDecreaseListener(callBack) {
    this.on(DECREASE, callBack)
  }

  getStore() {
    return store
  }
}

const CalculateStore = new CalculateStoreClass()

CalculateDispatcher.register((action) => {
  switch(action.type) {
    case INCREASE:
      store.count += action.payload
      CalculateStore.emit(INCREASE)
      break
    case DECREASE:
      store.count -= action.payload
      CalculateStore.emit(DECREASE)
      break
    default:
      return true
  }
  return true
})

export default CalculateStore