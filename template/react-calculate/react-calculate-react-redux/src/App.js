import React from 'react'
import Calculate from './component/calculate'
import { Provider } from 'react-redux'
import store from './store/store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Calculate />
      </Provider>
    )
  }
}

export default App