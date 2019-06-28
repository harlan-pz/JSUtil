import { Dispatcher } from 'flux'

class CalculateDispatcherClass extends Dispatcher {
  handleAction(action) {
    this.dispatch({
      type: action.type,
      payload: action.payload
    })
  }
}

const CalculateDispatcher = new CalculateDispatcherClass()

export default CalculateDispatcher